export interface BlogPost {
  id: string
  title: string
  author: string
  authorRole: string
  date: string
  featuredImage: string
  categories: string[]
  tags: string[]
  excerpt: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "10-best-practices-java",
    title: "10 Best Practices for Writing Robust Java Applications",
    author: "Davide Listello",
    authorRole: "Senior Software Engineer",
    date: "2026-02-15",
    featuredImage: "/images/java-best-practices.jpg",
    categories: ["Java", "Best Practices"],
    tags: ["Java", "OOP", "Clean Code", "SOLID"],
    excerpt:
      "Writing clean, maintainable Java code is essential for building applications that scale. Learn the top 10 best practices every Java developer should follow, from proper exception handling to effective use of design patterns.",
    readTime: "12 min read",
    content: `## Why Clean Code Matters in Java

Java remains one of the most widely used programming languages in enterprise software development. Writing clean, maintainable code isn't just about aesthetics — 
it directly impacts your team's productivity, bug rate, and the long-term health of your codebase.

## 1. Follow the Single Responsibility Principle

Every class should have one reason to change. This is the foundation of maintainable code.

\`\`\`java
// Bad: One class doing too much
public class UserManager {
    public void createUser(User user) { /* ... */ }
    public void sendEmail(String to, String body) { /* ... */ }
    public void generateReport() { /* ... */ }
}

// Good: Separated concerns
public class UserService {
    public void createUser(User user) { /* ... */ }
}

public class EmailService {
    public void sendEmail(String to, String body) { /* ... */ }
}

public class ReportService {
    public void generateReport() { /* ... */ }
}
\`\`\`

## 2. Use Meaningful Variable and Method Names

Names should reveal intent. A reader should understand what a variable or method does without needing comments.

\`\`\`java
// Bad
int d; // elapsed time in days
List<int[]> theList;

// Good
int elapsedTimeInDays;
List<Cell> flaggedCells;
\`\`\`

## 3. Prefer Composition Over Inheritance

Inheritance creates tight coupling. Composition gives you flexibility and is easier to test.

\`\`\`java
// Using composition
public class OrderProcessor {
    private final PaymentGateway paymentGateway;
    private final InventoryService inventoryService;
    private final NotificationService notificationService;

    public OrderProcessor(PaymentGateway pg, InventoryService is, NotificationService ns) {
        this.paymentGateway = pg;
        this.inventoryService = is;
        this.notificationService = ns;
    }

    public void processOrder(Order order) {
        paymentGateway.charge(order.getTotal());
        inventoryService.reserve(order.getItems());
        notificationService.sendConfirmation(order);
    }
}
\`\`\`

## 4. Handle Exceptions Properly

Never swallow exceptions silently. Use specific exception types and provide meaningful error messages.

\`\`\`java
// Bad
try {
    processData();
} catch (Exception e) {
    // silently ignored
}

// Good
try {
    processData();
} catch (DataProcessingException e) {
    logger.error("Failed to process data for batch {}: {}", batchId, e.getMessage());
    throw new ServiceException("Data processing failed", e);
}
\`\`\`

## 5. Use Optionals to Avoid NullPointerException

Java's Optional class helps you write null-safe code that clearly communicates when a value might be absent.

\`\`\`java
public Optional<User> findUserById(Long id) {
    return userRepository.findById(id);
}

// Usage
findUserById(42L)
    .map(User::getEmail)
    .ifPresentOrElse(
        email -> sendWelcomeEmail(email),
        () -> logger.warn("User not found")
    );
\`\`\`

## 6. Write Unit Tests First (TDD)

Test-Driven Development leads to better-designed, more testable code. Write the test, watch it fail, make it pass, refactor.

## 7. Use Immutable Objects Where Possible

Immutable objects are thread-safe, easier to reason about, and prevent unintended side effects.

\`\`\`java
public record UserDTO(String name, String email, LocalDate joinDate) {}
\`\`\`

## 8. Leverage Java Streams for Collection Processing

Streams provide a declarative way to process collections, making your code more readable and expressive.

\`\`\`java
List<String> activeUserEmails = users.stream()
    .filter(User::isActive)
    .filter(u -> u.getLastLogin().isAfter(cutoffDate))
    .map(User::getEmail)
    .sorted()
    .collect(Collectors.toList());
\`\`\`

## 9. Apply the Builder Pattern for Complex Objects

When constructors have many parameters, use the Builder pattern for readability and flexibility.

## 10. Document Public APIs with Javadoc

Public methods and classes should have clear Javadoc explaining their purpose, parameters, return values, and exceptions.

## Conclusion

These best practices are not rules set in stone — they are guidelines that help you write code your future self and your teammates will thank you for. 
Start incorporating them one at a time, and you will see measurable improvements in code quality and team velocity.`,
  },
  /*
  ******************************************************************************************************************************************************************************
  **/
  {
    id: "scrum-guide-software-teams",
    title: "Scrum Guide for Software Teams — Roles, Ceremonies, and Artifacts",
    author: "Davide Listello",
    authorRole: "Agile Coach & Architect",
    date: "2026-02-10",
    featuredImage: "/images/scrum-guide.jpg",
    categories: ["Agile", "Scrum"],
    tags: ["Agile", "Scrum", "SDLC", "Team Practices"],
    excerpt:
      "A comprehensive, beginner-friendly guide to Scrum methodology. Understand the three roles, five ceremonies, and three artifacts that make Scrum the most popular agile framework for delivering software.",
    readTime: "10 min read",
    content: `## What is Scrum?

Scrum is a lightweight agile framework that helps teams deliver complex products incrementally and iteratively. It emphasizes collaboration, accountability, and continuous 
improvement through short, time-boxed development cycles called Sprints.

## The Three Scrum Roles

| Role | Responsibility | Key Focus |
|------|---------------|-----------|
| **Product Owner** | Maximizes product value | Backlog management, stakeholder communication |
| **Scrum Master** | Facilitates the Scrum process | Removing impediments, coaching the team |
| **Development Team** | Delivers potentially shippable increments | Self-organizing, cross-functional work |

### Product Owner

The Product Owner is responsible for maximizing the value of the product resulting from the work of the Development Team. They manage the Product Backlog, ensuring items 
are clearly expressed, ordered, and understood.

### Scrum Master

The Scrum Master is a servant-leader for the team. They help everyone understand Scrum theory, practices, rules, and values. They remove impediments and shield the team from 
external distractions.

### Development Team

The Development Team consists of professionals who do the work of delivering a potentially releasable Increment of "Done" product at the end of each Sprint. 
They are self-organizing — no one tells the team how to turn Product Backlog into working increments.

## The Five Scrum Ceremonies

### 1. Sprint Planning

The team decides what work to commit to for the upcoming Sprint. The Product Owner presents the highest-priority items, and the team determines how much they can complete.

### 2. Daily Standup (Daily Scrum)

A 15-minute time-boxed event where each team member answers three questions:
- What did I accomplish yesterday?
- What will I work on today?
- Are there any blockers?

### 3. Sprint Review

At the end of the Sprint, the team demonstrates the completed work to stakeholders and gathers feedback. This is an opportunity to inspect the Increment and adapt the Product Backlog.

### 4. Sprint Retrospective

The team reflects on the Sprint and identifies what went well, what could be improved, and what actions to take. This is the engine of continuous improvement.

### 5. Backlog Refinement

An ongoing activity where the team and Product Owner review, estimate, and clarify upcoming backlog items. Typically consumes no more than 10% of the team's capacity.

## The Three Scrum Artifacts

### Product Backlog
An ordered list of everything that is known to be needed in the product. It is the single source of requirements and is continuously refined.

### Sprint Backlog
The set of Product Backlog items selected for the Sprint, plus a plan for delivering the Increment. It is a forecast of what the Development Team believes it can deliver.

### Increment
The sum of all Product Backlog items completed during a Sprint and all previous Sprints. At the end of a Sprint, the Increment must be "Done" — usable and meeting the 
team's Definition of Done.

## Getting Started with Scrum

1. Form a cross-functional team of 5-9 members
2. Appoint a Product Owner and Scrum Master
3. Create and prioritize your Product Backlog
4. Plan your first Sprint (2 weeks recommended)
5. Hold daily standups and stay focused
6. Review, retrospect, and improve every Sprint

## Conclusion

Scrum is deceptively simple but difficult to master. The key is consistency — follow the framework, inspect and adapt, and trust the process. Over time, your team will 
find its rhythm and deliver value faster than ever.`,
  },
  /*
  ******************************************************************************************************************************************************************************
  **/
  {
    id: "kong-api-gateway-architecture",
    title: "Why Senior Architects Choose Kong — Features, Use Cases, and Architecture Patterns",
    author: "Davide Listello",
    authorRole: "Senior Solution Architect",
    date: "2026-02-05",
    featuredImage: "/images/kong-gateway.jpg",
    categories: ["Architecture", "API Gateway"],
    tags: ["Kong", "API Gateway", "Microservices", "Cloud"],
    excerpt:
      "Kong API Gateway has become the industry standard for managing API traffic at scale. Learn why senior architects choose Kong, explore its architecture patterns, and see real-world configuration examples.",
    readTime: "14 min read",
    content: `## What is Kong API Gateway?

Kong is a cloud-native, high-performance API gateway built on top of NGINX and OpenResty. It acts as a reverse proxy that sits between your clients and your backend services, 
providing a unified entry point for all API traffic.

## Why Senior Architects Choose Kong

### Performance at Scale
Kong can handle tens of thousands of requests per second with sub-millisecond latency. Its NGINX foundation makes it one of the fastest API gateways available.

### Plugin Ecosystem
Kong's plugin architecture allows you to add functionality without modifying your services:
- **Authentication**: OAuth2, JWT, Basic Auth, API Keys
- **Traffic Control**: Rate limiting, request throttling, circuit breaking
- **Observability**: Logging, metrics, tracing (Prometheus, Datadog, Zipkin)
- **Transformations**: Request/response transformations, CORS

### Multi-Cloud & Hybrid Ready
Kong runs anywhere — Kubernetes, Docker, bare metal, or as a managed service (Konnect). This flexibility is critical for enterprise architectures.

## Architecture Patterns

### Pattern 1: Centralized Gateway

All API traffic flows through a single Kong instance or cluster. This is the simplest pattern and works well for small to medium deployments.

### Pattern 2: Decentralized / Mesh Gateway

Each service domain has its own Kong instance. This reduces blast radius and allows teams to independently manage their API policies.

### Pattern 3: Kong with Kubernetes Ingress

Kong acts as the Kubernetes Ingress Controller, handling both north-south (external) and east-west (internal) traffic.

\`\`\`yaml
apiVersion: configuration.konghq.com/v1
kind: KongPlugin
metadata:
  name: rate-limiting
config:
  minute: 100
  policy: local
plugin: rate-limiting
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    konghq.com/plugins: rate-limiting
    konghq.com/strip-path: "true"
spec:
  ingressClassName: kong
  rules:
    - host: api.adiwave.io
      http:
        paths:
          - path: /users
            pathType: Prefix
            backend:
              service:
                name: user-service
                port:
                  number: 8080
\`\`\`

## Configuration Examples

### Setting Up Rate Limiting

\`\`\`bash
curl -X POST http://localhost:8001/services/my-api/plugins \\
  --data "name=rate-limiting" \\
  --data "config.minute=100" \\
  --data "config.hour=1000" \\
  --data "config.policy=cluster"
\`\`\`

### JWT Authentication

\`\`\`bash
curl -X POST http://localhost:8001/services/my-api/plugins \\
  --data "name=jwt" \\
  --data "config.claims_to_verify=exp"
\`\`\`

## Pros and Cons

| Aspect | Pros | Cons |
|--------|------|------|
| **Performance** | Sub-ms latency, high throughput | Can be overkill for simple setups |
| **Extensibility** | Rich plugin ecosystem | Custom plugins require Lua knowledge |
| **Deployment** | Runs anywhere (K8s, Docker, VM) | Operational complexity at scale |
| **Community** | Large open-source community | Enterprise features require license |

## Conclusion

Kong is the right choice when you need a battle-tested, high-performance API gateway that scales with your architecture. Its plugin ecosystem, Kubernetes integration, and 
multi-cloud support make it a top pick for senior architects building modern distributed systems.`,
  },
  /*
  ******************************************************************************************************************************************************************************
  **/
  {
    id: "kubernetes-best-practices",
    title: "Kubernetes Best Practices for Scalable Cloud Solutions",
    author: "Davide Listello",
    authorRole: "Senior Solution Architect",
    date: "2026-01-28",
    featuredImage: "/images/kubernetes.jpg",
    categories: ["Cloud", "Kubernetes"],
    tags: ["Kubernetes", "K8s", "Cloud", "DevOps", "Containers"],
    excerpt:
      "Master Kubernetes best practices for building scalable, resilient cloud-native applications. From resource management to security hardening, this guide covers everything a senior engineer needs to know.",
    readTime: "15 min read",
    content: `## Why Kubernetes?

Kubernetes has become the de facto standard for container orchestration. It provides a robust platform for deploying, scaling, and managing containerized applications across 
any infrastructure.

## Resource Management

### Always Set Resource Requests and Limits

Every container should declare its resource requirements. This helps the scheduler make intelligent placement decisions and prevents noisy-neighbor problems.

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
  labels:
    app: api-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-service
  template:
    metadata:
      labels:
        app: api-service
    spec:
      containers:
        - name: api
          image: adiwave/api-service:1.2.0
          resources:
            requests:
              cpu: "250m"
              memory: "256Mi"
            limits:
              cpu: "500m"
              memory: "512Mi"
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 10
            periodSeconds: 5
          livenessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 30
            periodSeconds: 10
\`\`\`

## Health Checks

Always configure both **liveness** and **readiness** probes:
- **Liveness probes** tell Kubernetes when to restart a container
- **Readiness probes** tell Kubernetes when a container is ready to accept traffic

## Horizontal Pod Autoscaler (HPA)

Scale your workloads automatically based on CPU, memory, or custom metrics:

\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-service
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
\`\`\`

## Security Best Practices

### 1. Use Network Policies
Restrict pod-to-pod communication to only what's necessary.

### 2. Run as Non-Root
Never run containers as root in production.

\`\`\`yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  readOnlyRootFilesystem: true
  allowPrivilegeEscalation: false
\`\`\`

### 3. Use RBAC
Implement Role-Based Access Control to limit who can do what in your cluster.

### 4. Scan Images for Vulnerabilities
Use tools like Trivy, Snyk, or Aqua to scan container images before deployment.

## Namespace Strategy

Organize workloads by environment and team:
- \`production\` / \`staging\` / \`development\`
- \`team-payments\` / \`team-users\` / \`team-notifications\`

## Observability

Implement the three pillars of observability:
1. **Metrics** — Prometheus + Grafana for dashboards and alerting
2. **Logging** — EFK stack (Elasticsearch, Fluentd, Kibana) or Loki
3. **Tracing** — Jaeger or Zipkin for distributed tracing

## Conclusion

Kubernetes gives you immense power, but with that power comes responsibility. Follow these best practices to build clusters that are secure, efficient, and resilient. 
Start with the basics — resource limits, health checks, and RBAC — and iterate from there.`,
  },
  /*
  ******************************************************************************************************************************************************************************
  **/
  {
    id: "microservices-design-testing-deployment",
    title: "Principles of Microservices — Design, Testing, and Deployment",
    author: "Davide Listello",
    authorRole: "Senior Solution Architect",
    date: "2026-01-20",
    featuredImage: "/images/microservices.jpg",
    categories: ["Architecture", "Microservices"],
    tags: ["Microservices", "Architecture", "CI/CD", "Testing", "Docker"],
    excerpt:
      "A comprehensive guide to microservices architecture covering design principles, testing strategies, and deployment patterns. Learn how to build, test, and deploy microservices that scale.",
    readTime: "16 min read",
    content: `## What Are Microservices?

Microservices architecture is an approach to building applications as a collection of small, independently deployable services. Each service owns its data, runs in its own 
process, and communicates via lightweight protocols like HTTP/REST or messaging queues.

## Core Design Principles

### 1. Single Responsibility
Each microservice should do one thing and do it well. A service should be small enough that a single team can own it entirely.

### 2. Domain-Driven Design (DDD)
Align service boundaries with business domains. Use bounded contexts to define clear ownership and reduce coupling between services.

### 3. Database Per Service
Each service manages its own database. This ensures loose coupling and allows each service to choose the most appropriate storage technology.

### 4. API-First Design
Define your service contracts (APIs) before writing implementation code. Use OpenAPI/Swagger specifications for REST APIs.

### 5. Event-Driven Communication
Use asynchronous messaging for inter-service communication when possible. This decouples services and improves resilience.

\`\`\`java
// Event publishing example with Spring Cloud Stream
@Service
public class OrderService {
    private final StreamBridge streamBridge;

    public OrderService(StreamBridge streamBridge) {
        this.streamBridge = streamBridge;
    }

    public Order createOrder(OrderRequest request) {
        Order order = orderRepository.save(new Order(request));
        
        // Publish event asynchronously
        streamBridge.send("order-events", 
            new OrderCreatedEvent(order.getId(), order.getItems()));
        
        return order;
    }
}
\`\`\`

## Monolith vs. Microservices

| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| **Deployment** | All-or-nothing | Independent per service |
| **Scaling** | Entire application | Per-service granularity |
| **Technology** | Single stack | Polyglot (pick per service) |
| **Complexity** | Simpler initially | Higher operational overhead |
| **Team Structure** | Shared codebase | Team-per-service ownership |
| **Data Management** | Shared database | Database per service |

## Testing Strategies

### Unit Tests
Test individual components in isolation. Mock external dependencies.

### Integration Tests
Test service interactions with real databases and message brokers using Testcontainers.

\`\`\`java
@SpringBootTest
@Testcontainers
class UserServiceIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = 
        new PostgreSQLContainer<>("postgres:15-alpine");
    
    @Test
    void shouldCreateAndRetrieveUser() {
        // Test with real database
        UserDTO user = userService.createUser(
            new CreateUserRequest("John", "john@example.com"));
        
        assertThat(user.id()).isNotNull();
        assertThat(user.name()).isEqualTo("John");
    }
}
\`\`\`

### Contract Tests
Use tools like Pact to verify service interfaces remain compatible.

### End-to-End Tests
Run sparingly. Test critical user journeys across multiple services.

## CI/CD Pipeline

A typical microservices CI/CD pipeline:

1. **Code Commit** — Developer pushes code to feature branch
2. **Build & Unit Test** — Compile, lint, and run unit tests
3. **Container Build** — Create Docker image
4. **Integration Test** — Run integration tests with Testcontainers
5. **Security Scan** — Scan image for vulnerabilities
6. **Deploy to Staging** — Deploy to staging environment
7. **Smoke Tests** — Run smoke tests against staging
8. **Deploy to Production** — Blue-green or canary deployment

\`\`\`yaml
# GitHub Actions CI/CD Pipeline
name: Microservice CI/CD

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up JDK 21
        uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'temurin'
      - name: Build & Test
        run: ./gradlew build
      - name: Build Docker Image
        run: docker build -t adiwave/service:$GITHUB_SHA .
      - name: Push to Registry
        run: docker push adiwave/service:$GITHUB_SHA
      - name: Deploy to Kubernetes
        run: kubectl set image deployment/service service=adiwave/service:$GITHUB_SHA
\`\`\`

## Deployment Patterns

### Blue-Green Deployment
Maintain two identical environments. Switch traffic instantly between them.

### Canary Deployment
Route a small percentage of traffic to the new version. Gradually increase as confidence grows.

### Rolling Deployment
Update instances one at a time. Kubernetes handles this natively with Deployments.

## Conclusion

Microservices are not a silver bullet — they trade one set of problems for another. The key is to adopt them when the benefits (independent deployment, team autonomy, 
technology flexibility) outweigh the costs (operational complexity, distributed debugging, data consistency). Start with a well-structured monolith and extract services 
as your team and product grow.`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.categories.some((c) => c.toLowerCase() === category.toLowerCase())
  )
}

export function getAllCategories(): string[] {
  const categories = new Set<string>()
  blogPosts.forEach((post) =>
    post.categories.forEach((c) => categories.add(c))
  )
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach((post) => post.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}
