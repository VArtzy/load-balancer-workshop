# Wrap-Up & Hands-On Activity

## Summary
- **Layer 4:** Fast, simple, but "dumb" (no content awareness).
- **Layer 7:** Flexible, feature-rich, but resource-intensive.

## Activity: Build Your Own LB
1. **Task 1:** Set up a Layer 4 LB to balance traffic between 3 Node.js servers.
2. **Task 2:** Modify it to Layer 7, routing `/api` and `/static` to different backends.
3. **Challenge:** Add health checks (e.g., mark servers as "down" if they crash).

**Resources:**
- [HAProxy Docs](https://www.haproxy.org/)
- [Node.js Demo Code](insert_link)
