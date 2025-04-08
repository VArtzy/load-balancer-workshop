# Layer 7 Load Balancing

## 3.1 How It Works
- **Terminates TLS:** Decrypts and inspects HTTP data.
- **Two TCP Connections:**  
  Client ↔ LB (TLS) + LB ↔ Server (optional re-encryption).
- **Smart Routing:** Path-based (`/pictures` → Service A, `/comments` → Service B).

## 3.2 Pros & Cons
| **Pros**                          | **Cons**                          |
|-----------------------------------|-----------------------------------|
| Path-based routing                | Higher overhead (decryption)      |
| Caching (e.g., CDNs)              | More complex configuration        |
| Microservices-friendly            | Must manage TLS certificates      |
| Header/cookie manipulation        | Less secure (exposes plaintext)   |

## 3.3 Demo: HAProxy Layer 7 Setup
**Scenario:**  
Route `/app1` to `:4444`/`:5555` and `/app2` to `:7777`.

**Steps:**
1. **HAProxy Config (`http.cfg`):**
   ```conf
   listen layer7
     bind *:9999
     mode http
     acl is_app1 path_beg /app1
     use_backend app1_servers if is_app1
     backend app1_servers
       server server1 127.0.0.1:4444
       server server2 127.0.0.1:5555
   ```
2. **Test:**  
   `localhost:9999/app1` round-robins between `:4444` and `:5555`.
