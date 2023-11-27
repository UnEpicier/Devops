# WIK-DPS-TP02

## First part

### Target

Create a Dockerfile with the following requirements:

-   The most optimized image possible on the order of the layers
-   Scan the built image with `docker scout cves <image>`

### Dockerfile

Dockerfile is available [here](../WIK-DPS-TP01/Dockerfile)

Then, run the following command:

```bash
# Build the image
docker build -t api .

# Test it
docker run --rm -it -p 3000:3000 -v $(pwd):/app api
curl http://localhost:3000/ping
```

### Audit result

The audit result is available [here](./audit.txt)

## Second part

### Target

Create a Dockerfile with the following requirements:

-   Keep the same constraints as the previous Dockerfile
-   2 stages
    -   1 for building the application
    -   1 for running the application

### Dockerfile

Dockerfile is available [here](../WIK-DPS-TP01/Dockerfile.2)

Then, run the following command:

```bash
# Build the image
docker build -t api .

# Test it
docker run --rm -it -p 3000:3000 -v $(pwd):/app api
curl http://localhost:3000/ping
```

## Third part

### Target

Create a Dockerfile that print from 1 to 10000.

### Dockerfile

Dockerfile is available [here](./Dockerfile)

Then, run the following command:

```bash
# Build the image
docker build -t counter .

# Test it
docker run --rm -it counter
```
