# Key Comparisons

| **Feature**       | **Layer 4**               | **Layer 7**               |
|-------------------|---------------------------|---------------------------|
| **Visibility**    | IP/port only              | Full HTTP data            |
| **TLS**           | Pass-through              | Terminates (decrypts)     |
| **Use Cases**     | High-throughput raw TCP   | HTTP-aware routing        |
| **Complexity**    | Low                       | High                      |
