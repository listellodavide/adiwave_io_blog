interface MarkdownContentProps {
  content: string
}

function parseMarkdownLine(line: string): string {
  let result = line

  // Center alignment: Looks for <center>content</center>
  result = result.replace(
      /<center>(.*?)<\/center>/g,
      '<span style="display: block; text-align: center; margin: 1.5rem 0; width: 100%;">$1</span>'
  )

  // Bold
  result = result.replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-foreground'>$1</strong>")
  // Italic
  result = result.replace(/\*(.*?)\*/g, "<em>$1</em>")
  // Inline code
  result = result.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')

  return result
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code blocks
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i])
        i++
      }
      i++ // skip closing ```
      elements.push(
        <div key={key++} className="my-6 overflow-hidden rounded-xl ring-1 ring-border bg-secondary">
          {lang && (
            <div className="border-b border-border bg-muted px-4 py-2 text-xs font-mono text-muted-foreground">
              {lang}
            </div>
          )}
          <pre className="overflow-x-auto p-4">
            <code className="text-[13px] font-mono leading-relaxed text-foreground/90">
              {codeLines.join("\n")}
            </code>
          </pre>
        </div>
      )
      continue
    }

    // Tables
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableRows: string[] = []
      while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i])
        i++
      }
      if (tableRows.length >= 2) {
        const headerCells = tableRows[0]
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim())
        const bodyRows = tableRows.slice(2) // skip header and separator
        elements.push(
          <div key={key++} className="my-6 overflow-x-auto rounded-xl ring-1 ring-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  {headerCells.map((cell, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground"
                      dangerouslySetInnerHTML={{ __html: parseMarkdownLine(cell) }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rowIdx) => {
                  const cells = row
                    .split("|")
                    .filter((c) => c.trim())
                    .map((c) => c.trim())
                  return (
                    <tr
                      key={rowIdx}
                      className="border-b border-border last:border-0"
                    >
                      {cells.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className="px-4 py-3 text-muted-foreground"
                          dangerouslySetInnerHTML={{
                            __html: parseMarkdownLine(cell),
                          }}
                        />
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mt-12 mb-4 text-xl font-bold text-foreground lg:text-2xl"
          dangerouslySetInnerHTML={{ __html: parseMarkdownLine(line.slice(3)) }}
        />
      )
      i++
      continue
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="mt-8 mb-3 text-lg font-semibold text-foreground"
          dangerouslySetInnerHTML={{ __html: parseMarkdownLine(line.slice(4)) }}
        />
      )
      i++
      continue
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={key++} className="my-4 ml-5 flex flex-col gap-2.5 list-disc text-muted-foreground">
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className="text-sm leading-relaxed lg:text-base"
              dangerouslySetInnerHTML={{ __html: parseMarkdownLine(item) }}
            />
          ))}
        </ul>
      )
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""))
        i++
      }
      elements.push(
        <ol key={key++} className="my-4 ml-5 flex flex-col gap-2.5 list-decimal text-muted-foreground">
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className="text-sm leading-relaxed lg:text-base"
              dangerouslySetInnerHTML={{ __html: parseMarkdownLine(item) }}
            />
          ))}
        </ol>
      )
      continue
    }

    // Empty lines
    if (line.trim() === "") {
      i++
      continue
    }

    // Regular paragraphs
    elements.push(
      <p
        key={key++}
        className="my-4 text-sm leading-relaxed text-muted-foreground lg:text-base lg:leading-7"
        dangerouslySetInnerHTML={{ __html: parseMarkdownLine(line) }}
      />
    )
    i++
  }

  return <div className="prose-custom">{elements}</div>
}
