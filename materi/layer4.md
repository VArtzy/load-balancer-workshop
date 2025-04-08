# Layer 4 Load Balancing

## 2.1 How It Works
- **NAT (Network Address Translation):**  
  Rewrites IP/port headers without inspecting packet content.
- **Single TCP Connection:**  
  Client ↔ LB ↔ Server (LB doesn’t terminate TLS).
- **Algorithms:** Round-robin, least connections, etc.

## 2.2 Pros & Cons
| **Pros**                          | **Cons**                          |
|-----------------------------------|-----------------------------------|
| Simpler (no data inspection)      | No smart routing (e.g., by path)  |
| More efficient (lower latency)    | No caching                        |
| More secure (can’t decrypt data)  | Not microservices-friendly        |
| Stateful (handles TCP segments)   |                                   |

## 2.3 Demo: HAProxy Layer 4 Setup
**Scenario:**  
Balance traffic between two Node.js servers (`:4444` and `:5555`).

**Steps:**
1. **HAProxy Config (`tcp.cfg`):**
   ```conf
   listen layer4
     bind *:80
     mode tcp
     server server1 127.0.0.1:4444
     server server2 127.0.0.1:5555
   ```
2. **Run:**  
   `haproxy -f tcp.cfg`
3. **Test:**  
   Requests to `localhost:80` alternate between servers.
