# Glossary

## C

### Client
An endpoint (e.g., browser, mobile app) that initiates requests to servers through a load balancer.

## H

### HAProxy
Open-source software providing high-performance load balancing for TCP/HTTP applications.

### Health Check
Mechanism used by load balancers to verify backend server availability.

## I

### Ingress
A layer 7 reverse proxy/load balancer in Kubernetes that routes traffic to microservices.

## L

### Layer 4 Load Balancing
Operates at transport layer (TCP/UDP), routing traffic based on IP addresses and ports only.

### Layer 7 Load Balancing
Operates at application layer (HTTP/HTTPS), inspecting content like URLs and headers for routing.

### Least Connections
Load balancing algorithm that directs traffic to the server with fewest active connections.

## N

### NAT (Network Address Translation)
Technique used in layer 4 LBs to rewrite IP/port headers without decrypting content.

## O

### OSI Model
7-layer networking framework where layer 4 = transport, layer 7 = application.

## P

### Proxy
Intermediate server that forwards client requests. Load balancers are reverse proxies.

## R

### Round Robin
Basic load balancing algorithm that cycles through servers in sequence.

### Reverse Proxy
Server that accepts client requests and forwards them to backend servers (client unaware of backend).

## S

### Sticky Session
Maintains client affinity to a specific backend server for consistent routing.

## T

### TLS Termination
Process where layer 7 LBs decrypt HTTPS traffic before forwarding to backend servers.

### TCP Connection
Stateful network connection between client and server (or LB and server).

## U

### UDP
Connectionless protocol sometimes load balanced at layer 4 (e.g., for VoIP/streaming).
