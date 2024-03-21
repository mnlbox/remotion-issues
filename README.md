# Remotion video

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.gif">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Install Dependencies**

```console
pnpm i
```

**Start Preview**

```console
pnpm start
```

**Render video**

```console
pnpm build
```

**Upgrade Remotion**

```console
pnpm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

### Issue 3587

How to reproduce:
1. Open the repo in vsCode
2. Open Command Pallet and choose: `Dev Containers: Reopen in Container`
3. Run the command: `pnpm ts-node render.ts`
4. You will get this error in terminal:
```bash
Error: spawn /videos/node_modules/.pnpm/@remotion+compositor-linux-arm64-gnu@4.0.128/node_modules/@remotion/compositor-linux-arm64-gnu/remotion EACCES
    at Process.ChildProcess._handle.onexit (node:internal/child_process:286:19)
    at onErrorNT (node:internal/child_process:484:16)
    at processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -13,
  code: 'EACCES',
  syscall: 'spawn /videos/node_modules/.pnpm/@remotion+compositor-linux-arm64-gnu@4.0.128/node_modules/@remotion/compositor-linux-arm64-gnu/remotion',
  path: '/videos/node_modules/.pnpm/@remotion+compositor-linux-arm64-gnu@4.0.128/node_modules/@remotion/compositor-linux-arm64-gnu/remotion',
  spawnargs: [
    '{"nonce":"xw10gjvcbxrou5jyopzi","payload":{"type":"StartLongRunningProcess","params":{"concurrency":1,"maximum_frame_cache_size_in_bytes":null,"verbose":false}}}'
  ]
}
```
5. Now downgrade all Remotion packages to `4.0.121`

6. Re-run `pnpm install` and rerun the `pnpm ts-node render.ts` command. It will render the video without any issues.


## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
