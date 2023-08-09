FROM oven/bun:latest
COPY . .
RUN bun install
EXPOSE 3000
CMD ["bun", "run", "./index.ts"]