# odp-embedded-controller

Public reference and demo firmware for Embedded Controllers (EC) built on
[Open Device Partnership](https://github.com/OpenDevicePartnership) components.
This repository contains non-NDA development targets suitable for experimentation,
integration testing, and as a starting point for downstream EC projects.

## Scope

This repository is the public counterpart to the private
[`OpenDevicePartnership/soc-embedded-controller`](https://github.com/OpenDevicePartnership/soc-embedded-controller)
repo. NDA-covered platforms and silicon-specific code remain private; only public,
non-NDA development targets live here.

## Platforms

| Crate | Role | Target |
|-------|------|--------|
| `platform-common` | Shared `no_std` library crate — HAL traits, board abstractions, common services | (library, no build target) |
| `dev-imxrt` | Development target on NXP i.MXRT685S (Cortex-M33) | `thumbv8m.main-none-eabihf` |
| `dev-npcx` | Development target on Nuvoton NPCX498M (Cortex-M4F) | `thumbv7em-none-eabihf` |
| `dev-qemu` | Development target under QEMU `virt` machine (RISC-V 32-bit) | `riscv32imac-unknown-none-elf` |

`platform-common` is consumed by each `dev-*` crate and contains no platform-specific code.

## Toolchain

Toolchain channel and targets are pinned in `rust-toolchain.toml`:

- Channel: `stable`
- Pre-installed targets: `thumbv8m.main-none-eabihf`, `thumbv7em-none-eabihf`
- Components: `rust-src`, `rustfmt`, `llvm-tools-preview`, `clippy`

The RISC-V target used by `dev-qemu` is not pinned in the toolchain file (it is
only required for that platform). Install it on demand:

```
rustup target add riscv32imac-unknown-none-elf
```

## Build

> Platform crates land in a follow-up phase. Once `platform/` is populated,
> each target builds from its own crate directory.

Build and lint a platform:

```
cd platform/<name>
cargo build --locked
cargo clippy --locked -- -D warnings
```

For example, to build `dev-qemu` under QEMU:

```
rustup target add riscv32imac-unknown-none-elf
cd platform/dev-qemu
cargo build --locked
```

Format checks:

```
cargo fmt --all -- --check
```

Dependency policy (licenses, sources, advisories) is enforced by
[cargo-deny](https://github.com/EmbarkStudios/cargo-deny) using `deny.toml`:

```
cargo deny check
```

## Continuous Integration

CI lives under `.github/workflows/`:

- `check.yml` — per-platform build, clippy, fmt, and cargo-deny across the public matrix.
- `nostd.yml` — verifies `platform-common` and `dev-*` remain `no_std`-clean.
- `benchmark.yml`, `rolling.yml` — secondary lanes carried forward from upstream.

## Contributing

Code review ownership is defined in `CODEOWNERS`. Please open issues and PRs
against `main`. For anything that touches NDA-covered silicon, raise it in the
private
[`soc-embedded-controller`](https://github.com/OpenDevicePartnership/soc-embedded-controller)
repo instead.

## License

Licensed under the MIT License. See [LICENSE](./LICENSE).
