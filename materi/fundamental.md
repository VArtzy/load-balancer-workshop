# Fundamentals of Load Balancing

## 1.1 What is a Load Balancer?
- Acts as a **reverse proxy** (client connects to LB, LB routes to backend)
- Key purposes:
  - Distribute traffic to prevent single-server overload
  - Provide fault tolerance (failover if a server dies)
  - Enable scaling (add more servers as needed)

## 1.2 OSI Model Context
*(Reference: [OSI Model Video](insert_link))*
- **Layer 4 (Transport Layer):**  
  Operates at TCP/UDP level. Knows only IPs and ports.
- **Layer 7 (Application Layer):**  
  Understands application data (HTTP headers, cookies, paths).
