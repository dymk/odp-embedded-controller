window.BENCHMARK_DATA = {
  "lastUpdate": 1782436043112,
  "repoUrl": "https://github.com/dymk/odp-embedded-controller",
  "entries": {
    "dev-npcx": [
      {
        "commit": {
          "author": {
            "email": "tcdknutson@gmail.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "committer": {
            "email": "tcdknutson@gmail.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "distinct": true,
          "id": "f80d37ffcc859aa77e0f70cbe2081eb7cccb9cb1",
          "message": "benchmark: push gh-pages with GITHUB_TOKEN instead of deploy key\n\nThe upstream workflow expects a DEPLOY_KEY secret for SSH auth; that\nsecret doesn't exist in this repo, so actions/checkout silently falls\nback to HTTPS + the ephemeral GITHUB_TOKEN extraheader. The explicit\n`-c http.https://github.com/.extraheader=` on the manual push then\nclears that token, leaving the push with no credentials:\n\n  fatal: could not read Username for 'https://github.com':\n    No such device or address\n\nThe job already declares `permissions: contents: write`, so\nGITHUB_TOKEN has enough scope to push benchmark data to gh-pages.\nDrop the ssh-key argument from checkout and let the default auth\nflow the benchmark action sets up survive into the push step.\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>",
          "timestamp": "2026-04-16T15:50:22-07:00",
          "tree_id": "00b4247c962001a0bd26e47036905a4599ec39af",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/f80d37ffcc859aa77e0f70cbe2081eb7cccb9cb1"
        },
        "date": 1776380749142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.43,
            "unit": "KiB",
            "extra": "RAM Size: 7.48 KiB\nDependency Count: 356\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dymk@users.noreply.github.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb2158253ef1bc4dcfa46ed749aca164ab6de07",
          "message": "chore: initialize cargo-vet (#3)\n\n* chore: initialize cargo-vet\n\nInitialize cargo-vet for each of the 3 platform crates (dev-imxrt,\ndev-npcx, dev-qemu). Each platform has its own supply-chain/ store\nwith audits.toml, config.toml, and imports.lock — matching cargo-vet's\nper-workspace design (each platform has its own Cargo.lock and dep\ngraph, so a shared store would not satisfy cargo-vet's policy\nvalidation).\n\nProcess documentation lives at docs/supply-chain.md (single shared\ncopy at repo root rather than duplicated into each store).\n\nImports the OpenDevicePartnership, bytecode-alliance, google, and\nmozilla audit sources, mirroring the embedded-services pattern.\n\nAdds two CI workflows:\n- cargo-vet.yml: matrix per platform, runs 'cargo vet --locked' from\n  each platform/<dev-*>/ directory.\n- cargo-vet-pr-comment.yml: workflow_run-triggered, downloads the\n  per-platform pr-* artifacts via merge-multiple, posts the audit\n  questionnaire on failure and updates to a success message on pass.\n\nAll 3 platforms pass 'cargo vet --locked'.\n\n* chore(cargo-vet): apply review feedback\n\n- pin rust toolchain via dtolnay/rust-toolchain\n- pass --locked to cargo install cargo-vet\n- skip pr-comment job on cancelled upstream runs\n- link docs/supply-chain.md at workflow_run head_sha (works on open PRs)\n- 'Github' -> 'GitHub'",
          "timestamp": "2026-04-21T09:36:46-05:00",
          "tree_id": "d9e241e6676d3f1f9e7f999c3ad3b6a88d4095fb",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/4eb2158253ef1bc4dcfa46ed749aca164ab6de07"
        },
        "date": 1776782355314,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.32,
            "unit": "KiB",
            "extra": "RAM Size: 7.48 KiB\nDependency Count: 356\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43c220b30d49f9bab9f2da8b72a5ccfa0a5c3aad",
          "message": "platform-common: Downgrade embedded-mcu-hal (#4)",
          "timestamp": "2026-04-21T11:05:13-05:00",
          "tree_id": "51cd7477d05c3b0e4b2afb8ee7b311d7c745744b",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/43c220b30d49f9bab9f2da8b72a5ccfa0a5c3aad"
        },
        "date": 1776787649929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.32,
            "unit": "KiB",
            "extra": "RAM Size: 7.48 KiB\nDependency Count: 356\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1733a4007743ca2b6cc9144c1f0f81ebdb2818ec",
          "message": "Add platform-common to clippy CI job (#5)",
          "timestamp": "2026-04-21T12:18:54-05:00",
          "tree_id": "4b3cc9dc3d9d00003e1bc30ab4332d882c3d8d1c",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/1733a4007743ca2b6cc9144c1f0f81ebdb2818ec"
        },
        "date": 1776792024278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.32,
            "unit": "KiB",
            "extra": "RAM Size: 7.48 KiB\nDependency Count: 356\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f515a4ab25809d15b4df5fe9705ebf71a7e8e6c",
          "message": "dev-qemu: Update to use async UART (#9)\n\nJust finished adding async support to the embassy qemu riscv HAL: https://github.com/kurtjd/qemu-riscv-rs/pull/1\n\nSo this updates the `dev-qemu` platform to use it, which resolves the task starvation issue. I'm not sure if QEMU exposes the hardware flow control interface externally so had to go with a buffered UART approach to prevent the 16 byte RX FIFO from being overrun.\n\nResolves #7",
          "timestamp": "2026-04-23T15:35:30-07:00",
          "tree_id": "8ee276ef1b936020472f81919ed9fe3d8b0abf9b",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/0f515a4ab25809d15b4df5fe9705ebf71a7e8e6c"
        },
        "date": 1776983825111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.32,
            "unit": "KiB",
            "extra": "RAM Size: 7.48 KiB\nDependency Count: 356\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45800072+williampMSFT@users.noreply.github.com",
            "name": "Billy Price",
            "username": "williampMSFT"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78c2e985c5faba85cc4d6e13d915b809f5087859",
          "message": "Uptake embedded-services commit 01bc3655 #8\n\nThis change updates the version of embedded-services to commit 01bc3655b3afe01f7d8c92ed855f7befad571e52.\nThere are a number of changes associated with this version of embedded-services:\n- Updates to embassy transitive dependencies:\n  - embassy-executor bumped to v0.10.0\n    - changed task creation slightly due to removal of spawner.must_spawn()\n    - platform features renamed from 'arch-*' to 'platform-*'\n  - embassy-sync updated to v0.8.0\n  - embedded-mcu-hal updated from git to crates.io v0.2.0\n    - new version renamed several types and functions for nvram and clocks\n- Updates to embedded-services itself\n  - thermal, battery, and time-alarm services split interface into traits\n  - thermal, battery, and time-alarm services split relay handling into a separate object\n  - thermal, battery, and time-alarm services moved to uniform-init spawning\n  - thermal service interface reworked substantially to support interface changes\n  - thermal and battery services moved to be generic over some hardware-specific types\n    - required moving the OdpRelayHandler definition out of platform_common because the type needs to be different on different hardware",
          "timestamp": "2026-04-23T17:16:22-07:00",
          "tree_id": "41b6de49677d4aa0776c0ce57e13a6801724c9a0",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/78c2e985c5faba85cc4d6e13d915b809f5087859"
        },
        "date": 1776989879375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 71.45,
            "unit": "KiB",
            "extra": "RAM Size: 6.08 KiB\nDependency Count: 362\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29d4fe988c83f4502c47c572a1bd6509c1be0075",
          "message": "Ignore bare-metal in deny.toml (#11)",
          "timestamp": "2026-04-30T14:30:25-07:00",
          "tree_id": "7f8a8e68994beb214089bfb9ae49d8c53615e1d8",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/29d4fe988c83f4502c47c572a1bd6509c1be0075"
        },
        "date": 1777584718061,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 71.45,
            "unit": "KiB",
            "extra": "RAM Size: 6.08 KiB\nDependency Count: 362\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0cde32f7405ea47765a0a716ca5f89a3d1863bb4",
          "message": "Update embedded-services + hals (#16)\n\n* Update embedded-services + hals\n\n* Remove unused embedded-io-async dep\n\n* Add cargo-vet audits and refresh imports for updated embassy dependencies\n\nAssisted-by: copilot-cli:claude-opus-4.6 cargo-vet",
          "timestamp": "2026-05-15T08:42:28-07:00",
          "tree_id": "662a01f3fd89ebdd38fc6bbf0b0a74aeac7777f5",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/0cde32f7405ea47765a0a716ca5f89a3d1863bb4"
        },
        "date": 1779131580628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 71.34,
            "unit": "KiB",
            "extra": "RAM Size: 6.08 KiB\nDependency Count: 312\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dymk@users.noreply.github.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d3ae374f519792cd24f68127bd9eedae2e688483",
          "message": "Bump embedded-services, EC_TEST_CLI_REV, and embassy-time pins (#19)\n\n* Bump embedded-services, EC_TEST_CLI_REV, and embassy-time pins\n\nUpdate the embedded-services lockfile pins across all platforms to\npick up the v0.2.0 branch HEAD (f1f1e087), which includes:\n- PR #852: uart-service Service<R, M> generic over MctpMedium\n- PR #854: v0.2.0 mergeback (heapless 0.9.2, embassy-time 0.5.1)\n\nMigrate all platforms from the removed Service::new(relay) API to\nDefaultService::default_smbusespi(relay), which preserves the\nSmbusEspi wire format used by existing hardware platforms.\n\nBump EC_TEST_CLI_REV from e674ca93 to d705cd4f to pick up\nodp-platform-common PR #92, which adds SMBus PEC byte support to\nec-test-cli's serial transport — required by the post-#852\nSmbusEspiMedium.\n\nBump dev-npcx embassy-time pins from 0.5.0 to 0.5.1 and\nembassy-time-driver from 0.2.1 to 0.2.2, matching the transitive\nrequirements from the updated embedded-services.\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal\n\n* Add cargo-vet exemptions for bumped dependencies\n\nAdd safe-to-deploy exemptions for crate versions pulled in by the\nembedded-services v0.2.0 pin advancement. All are minor/patch version\nbumps of existing dependencies, except hashbrown 0.17.1 (new transitive\nfrom heapless 0.9).\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal\n\n* Fix stale embassy-sync policy rev in dev-npcx cargo-vet config\n\nReplace the rev-pinned policy key for embassy-sync with a generic\n[policy.embassy-sync] entry (matching dev-imxrt's approach), and add\nan exemption for the new git rev. The old rev (c8715fc1) no longer\nmatches the lockfile (e9c32931) after the embedded-services bump.\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal",
          "timestamp": "2026-05-20T22:34:59-05:00",
          "tree_id": "e1eaae3fb4dddfd9383ef1aba28f8c85eff9a65b",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/d3ae374f519792cd24f68127bd9eedae2e688483"
        },
        "date": 1779477265033,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 64.29,
            "unit": "KiB",
            "extra": "RAM Size: 6.09 KiB\nDependency Count: 312\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "blakejackson312006@gmail.com",
            "name": "Blake Jackson",
            "username": "bjackson312006"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95d998c2b5f563f5b1899870ac93517c83ff1a9a",
          "message": "Dev Platform for MEC1723 (#25)\n\n* basic setup\n\n* board.rs updated\n\n* compiled successfully\n\n* fixed comments in memory.x\n\n* updated config.toml\n\n* j-link issue\n\n* rtt works\n\n* no more uart error\n\n* buffered uart\n\n* rebase\n\n* update embassy-microchip fork and turn off [TRACE] logs\n\n* removed custom yaml, adjusted memory.x and link_ram.x to be consistent with the embassy example\n\n* renamed to dev-mec, changed Cargo.toml dependency branches\n\n* update deleted files on gh?\n\n* updated embedded-services to main",
          "timestamp": "2026-05-27T10:09:56-07:00",
          "tree_id": "d184055b8f2b4821faedef36f3e6c2385e9bf5e8",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/95d998c2b5f563f5b1899870ac93517c83ff1a9a"
        },
        "date": 1779994847899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 64.31,
            "unit": "KiB",
            "extra": "RAM Size: 6.09 KiB\nDependency Count: 313\nVersion: rustc 1.96.0 (ac68faa20 2026-05-25)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "felipe.balbi@microsoft.com",
            "name": "Felipe Balbi",
            "username": "felipebalbi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6fb3ce5d9ae52ca51d6ef7b87518c6c4cb3c809",
          "message": "docs: add AGENTS.md and model-selection guidance (#26)\n\n* Add AGENTS.md for AI coding agents\n\nDocument the operational workflow autonomous coding agents need to\n\nbe productive in this repository: per-platform build/lint/test\n\ncommands, the no-workspace-root layout, required tooling\n\n(flip-link, cargo-deny), CI mirror script, code conventions\n\n(static allocation, Embassy async, defmt, lint strictness), and the\n\ncommit/AI-attribution/push policy.\n\nComplements .github/copilot-instructions.md, which remains the deep\n\nreference for architecture and conventions.\n\nAssisted-by: GitHub Copilot:claude-opus-4.7\n\n* docs(AGENTS.md): add model selection & cost discipline section\n\nAdds guidance on choosing between premium and cheap models for code-assistant work, including escalation/de-escalation triggers, sub-agent routing defaults, /fleet rules, and session-hygiene tips. Keeps premium reasoning for genuinely hard problems and routes mechanical work to cheaper models.\n\nAssisted-by: GitHub Copilot:claude-opus-4.7\n\n---------\n\nCo-authored-by: Kurtis Dinelle <kdinelle@microsoft.com>",
          "timestamp": "2026-05-28T14:15:50-07:00",
          "tree_id": "3706678d5b083a2b96f703e53cc322fda2233fb9",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/d6fb3ce5d9ae52ca51d6ef7b87518c6c4cb3c809"
        },
        "date": 1780004806610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 64.31,
            "unit": "KiB",
            "extra": "RAM Size: 6.09 KiB\nDependency Count: 313\nVersion: rustc 1.96.0 (ac68faa20 2026-05-25)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8705e326ecb29e4074feaa73542245b2df716c99",
          "message": "dev-qemu: Update HAL and use custom QEMU (#28)\n\n* dev-qemu: Update HAL and use custom QEMU\n\n* Replace 'virt' with 'ec'",
          "timestamp": "2026-06-18T14:50:24-07:00",
          "tree_id": "76cad2ba1ca1e9b1c062a1eef1466a28d6cf86d2",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/8705e326ecb29e4074feaa73542245b2df716c99"
        },
        "date": 1782436042817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 64.31,
            "unit": "KiB",
            "extra": "RAM Size: 6.09 KiB\nDependency Count: 313\nVersion: rustc 1.96.0 (ac68faa20 2026-05-25)"
          }
        ]
      }
    ],
    "dev-imxrt": [
      {
        "commit": {
          "author": {
            "email": "tcdknutson@gmail.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "committer": {
            "email": "tcdknutson@gmail.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "distinct": true,
          "id": "f80d37ffcc859aa77e0f70cbe2081eb7cccb9cb1",
          "message": "benchmark: push gh-pages with GITHUB_TOKEN instead of deploy key\n\nThe upstream workflow expects a DEPLOY_KEY secret for SSH auth; that\nsecret doesn't exist in this repo, so actions/checkout silently falls\nback to HTTPS + the ephemeral GITHUB_TOKEN extraheader. The explicit\n`-c http.https://github.com/.extraheader=` on the manual push then\nclears that token, leaving the push with no credentials:\n\n  fatal: could not read Username for 'https://github.com':\n    No such device or address\n\nThe job already declares `permissions: contents: write`, so\nGITHUB_TOKEN has enough scope to push benchmark data to gh-pages.\nDrop the ssh-key argument from checkout and let the default auth\nflow the benchmark action sets up survive into the push step.\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>",
          "timestamp": "2026-04-16T15:50:22-07:00",
          "tree_id": "00b4247c962001a0bd26e47036905a4599ec39af",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/f80d37ffcc859aa77e0f70cbe2081eb7cccb9cb1"
        },
        "date": 1776380803229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 81.91,
            "unit": "KiB",
            "extra": "RAM Size: 10.62 KiB\nDependency Count: 378\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dymk@users.noreply.github.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4eb2158253ef1bc4dcfa46ed749aca164ab6de07",
          "message": "chore: initialize cargo-vet (#3)\n\n* chore: initialize cargo-vet\n\nInitialize cargo-vet for each of the 3 platform crates (dev-imxrt,\ndev-npcx, dev-qemu). Each platform has its own supply-chain/ store\nwith audits.toml, config.toml, and imports.lock — matching cargo-vet's\nper-workspace design (each platform has its own Cargo.lock and dep\ngraph, so a shared store would not satisfy cargo-vet's policy\nvalidation).\n\nProcess documentation lives at docs/supply-chain.md (single shared\ncopy at repo root rather than duplicated into each store).\n\nImports the OpenDevicePartnership, bytecode-alliance, google, and\nmozilla audit sources, mirroring the embedded-services pattern.\n\nAdds two CI workflows:\n- cargo-vet.yml: matrix per platform, runs 'cargo vet --locked' from\n  each platform/<dev-*>/ directory.\n- cargo-vet-pr-comment.yml: workflow_run-triggered, downloads the\n  per-platform pr-* artifacts via merge-multiple, posts the audit\n  questionnaire on failure and updates to a success message on pass.\n\nAll 3 platforms pass 'cargo vet --locked'.\n\n* chore(cargo-vet): apply review feedback\n\n- pin rust toolchain via dtolnay/rust-toolchain\n- pass --locked to cargo install cargo-vet\n- skip pr-comment job on cancelled upstream runs\n- link docs/supply-chain.md at workflow_run head_sha (works on open PRs)\n- 'Github' -> 'GitHub'",
          "timestamp": "2026-04-21T09:36:46-05:00",
          "tree_id": "d9e241e6676d3f1f9e7f999c3ad3b6a88d4095fb",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/4eb2158253ef1bc4dcfa46ed749aca164ab6de07"
        },
        "date": 1776782392769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 81.79,
            "unit": "KiB",
            "extra": "RAM Size: 10.62 KiB\nDependency Count: 378\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43c220b30d49f9bab9f2da8b72a5ccfa0a5c3aad",
          "message": "platform-common: Downgrade embedded-mcu-hal (#4)",
          "timestamp": "2026-04-21T11:05:13-05:00",
          "tree_id": "51cd7477d05c3b0e4b2afb8ee7b311d7c745744b",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/43c220b30d49f9bab9f2da8b72a5ccfa0a5c3aad"
        },
        "date": 1776787702996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 81.79,
            "unit": "KiB",
            "extra": "RAM Size: 10.62 KiB\nDependency Count: 378\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1733a4007743ca2b6cc9144c1f0f81ebdb2818ec",
          "message": "Add platform-common to clippy CI job (#5)",
          "timestamp": "2026-04-21T12:18:54-05:00",
          "tree_id": "4b3cc9dc3d9d00003e1bc30ab4332d882c3d8d1c",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/1733a4007743ca2b6cc9144c1f0f81ebdb2818ec"
        },
        "date": 1776792059730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 81.79,
            "unit": "KiB",
            "extra": "RAM Size: 10.62 KiB\nDependency Count: 378\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f515a4ab25809d15b4df5fe9705ebf71a7e8e6c",
          "message": "dev-qemu: Update to use async UART (#9)\n\nJust finished adding async support to the embassy qemu riscv HAL: https://github.com/kurtjd/qemu-riscv-rs/pull/1\n\nSo this updates the `dev-qemu` platform to use it, which resolves the task starvation issue. I'm not sure if QEMU exposes the hardware flow control interface externally so had to go with a buffered UART approach to prevent the 16 byte RX FIFO from being overrun.\n\nResolves #7",
          "timestamp": "2026-04-23T15:35:30-07:00",
          "tree_id": "8ee276ef1b936020472f81919ed9fe3d8b0abf9b",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/0f515a4ab25809d15b4df5fe9705ebf71a7e8e6c"
        },
        "date": 1776983858704,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 81.79,
            "unit": "KiB",
            "extra": "RAM Size: 10.62 KiB\nDependency Count: 378\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "45800072+williampMSFT@users.noreply.github.com",
            "name": "Billy Price",
            "username": "williampMSFT"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78c2e985c5faba85cc4d6e13d915b809f5087859",
          "message": "Uptake embedded-services commit 01bc3655 #8\n\nThis change updates the version of embedded-services to commit 01bc3655b3afe01f7d8c92ed855f7befad571e52.\nThere are a number of changes associated with this version of embedded-services:\n- Updates to embassy transitive dependencies:\n  - embassy-executor bumped to v0.10.0\n    - changed task creation slightly due to removal of spawner.must_spawn()\n    - platform features renamed from 'arch-*' to 'platform-*'\n  - embassy-sync updated to v0.8.0\n  - embedded-mcu-hal updated from git to crates.io v0.2.0\n    - new version renamed several types and functions for nvram and clocks\n- Updates to embedded-services itself\n  - thermal, battery, and time-alarm services split interface into traits\n  - thermal, battery, and time-alarm services split relay handling into a separate object\n  - thermal, battery, and time-alarm services moved to uniform-init spawning\n  - thermal service interface reworked substantially to support interface changes\n  - thermal and battery services moved to be generic over some hardware-specific types\n    - required moving the OdpRelayHandler definition out of platform_common because the type needs to be different on different hardware",
          "timestamp": "2026-04-23T17:16:22-07:00",
          "tree_id": "41b6de49677d4aa0776c0ce57e13a6801724c9a0",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/78c2e985c5faba85cc4d6e13d915b809f5087859"
        },
        "date": 1776989897290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 75.16,
            "unit": "KiB",
            "extra": "RAM Size: 9.53 KiB\nDependency Count: 377\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29d4fe988c83f4502c47c572a1bd6509c1be0075",
          "message": "Ignore bare-metal in deny.toml (#11)",
          "timestamp": "2026-04-30T14:30:25-07:00",
          "tree_id": "7f8a8e68994beb214089bfb9ae49d8c53615e1d8",
          "url": "https://github.com/OpenDevicePartnership/odp-embedded-controller/commit/29d4fe988c83f4502c47c572a1bd6509c1be0075"
        },
        "date": 1777584756630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 75.16,
            "unit": "KiB",
            "extra": "RAM Size: 9.53 KiB\nDependency Count: 377\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0cde32f7405ea47765a0a716ca5f89a3d1863bb4",
          "message": "Update embedded-services + hals (#16)\n\n* Update embedded-services + hals\n\n* Remove unused embedded-io-async dep\n\n* Add cargo-vet audits and refresh imports for updated embassy dependencies\n\nAssisted-by: copilot-cli:claude-opus-4.6 cargo-vet",
          "timestamp": "2026-05-15T08:42:28-07:00",
          "tree_id": "662a01f3fd89ebdd38fc6bbf0b0a74aeac7777f5",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/0cde32f7405ea47765a0a716ca5f89a3d1863bb4"
        },
        "date": 1779131617119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 75.24,
            "unit": "KiB",
            "extra": "RAM Size: 9.53 KiB\nDependency Count: 330\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dymk@users.noreply.github.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d3ae374f519792cd24f68127bd9eedae2e688483",
          "message": "Bump embedded-services, EC_TEST_CLI_REV, and embassy-time pins (#19)\n\n* Bump embedded-services, EC_TEST_CLI_REV, and embassy-time pins\n\nUpdate the embedded-services lockfile pins across all platforms to\npick up the v0.2.0 branch HEAD (f1f1e087), which includes:\n- PR #852: uart-service Service<R, M> generic over MctpMedium\n- PR #854: v0.2.0 mergeback (heapless 0.9.2, embassy-time 0.5.1)\n\nMigrate all platforms from the removed Service::new(relay) API to\nDefaultService::default_smbusespi(relay), which preserves the\nSmbusEspi wire format used by existing hardware platforms.\n\nBump EC_TEST_CLI_REV from e674ca93 to d705cd4f to pick up\nodp-platform-common PR #92, which adds SMBus PEC byte support to\nec-test-cli's serial transport — required by the post-#852\nSmbusEspiMedium.\n\nBump dev-npcx embassy-time pins from 0.5.0 to 0.5.1 and\nembassy-time-driver from 0.2.1 to 0.2.2, matching the transitive\nrequirements from the updated embedded-services.\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal\n\n* Add cargo-vet exemptions for bumped dependencies\n\nAdd safe-to-deploy exemptions for crate versions pulled in by the\nembedded-services v0.2.0 pin advancement. All are minor/patch version\nbumps of existing dependencies, except hashbrown 0.17.1 (new transitive\nfrom heapless 0.9).\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal\n\n* Fix stale embassy-sync policy rev in dev-npcx cargo-vet config\n\nReplace the rev-pinned policy key for embassy-sync with a generic\n[policy.embassy-sync] entry (matching dev-imxrt's approach), and add\nan exemption for the new git rev. The old rev (c8715fc1) no longer\nmatches the lockfile (e9c32931) after the embedded-services bump.\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal",
          "timestamp": "2026-05-20T22:34:59-05:00",
          "tree_id": "e1eaae3fb4dddfd9383ef1aba28f8c85eff9a65b",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/d3ae374f519792cd24f68127bd9eedae2e688483"
        },
        "date": 1779477291421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 67.87,
            "unit": "KiB",
            "extra": "RAM Size: 9.53 KiB\nDependency Count: 328\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "blakejackson312006@gmail.com",
            "name": "Blake Jackson",
            "username": "bjackson312006"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95d998c2b5f563f5b1899870ac93517c83ff1a9a",
          "message": "Dev Platform for MEC1723 (#25)\n\n* basic setup\n\n* board.rs updated\n\n* compiled successfully\n\n* fixed comments in memory.x\n\n* updated config.toml\n\n* j-link issue\n\n* rtt works\n\n* no more uart error\n\n* buffered uart\n\n* rebase\n\n* update embassy-microchip fork and turn off [TRACE] logs\n\n* removed custom yaml, adjusted memory.x and link_ram.x to be consistent with the embassy example\n\n* renamed to dev-mec, changed Cargo.toml dependency branches\n\n* update deleted files on gh?\n\n* updated embedded-services to main",
          "timestamp": "2026-05-27T10:09:56-07:00",
          "tree_id": "d184055b8f2b4821faedef36f3e6c2385e9bf5e8",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/95d998c2b5f563f5b1899870ac93517c83ff1a9a"
        },
        "date": 1779994930534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 67.87,
            "unit": "KiB",
            "extra": "RAM Size: 9.53 KiB\nDependency Count: 329\nVersion: rustc 1.96.0 (ac68faa20 2026-05-25)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "felipe.balbi@microsoft.com",
            "name": "Felipe Balbi",
            "username": "felipebalbi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6fb3ce5d9ae52ca51d6ef7b87518c6c4cb3c809",
          "message": "docs: add AGENTS.md and model-selection guidance (#26)\n\n* Add AGENTS.md for AI coding agents\n\nDocument the operational workflow autonomous coding agents need to\n\nbe productive in this repository: per-platform build/lint/test\n\ncommands, the no-workspace-root layout, required tooling\n\n(flip-link, cargo-deny), CI mirror script, code conventions\n\n(static allocation, Embassy async, defmt, lint strictness), and the\n\ncommit/AI-attribution/push policy.\n\nComplements .github/copilot-instructions.md, which remains the deep\n\nreference for architecture and conventions.\n\nAssisted-by: GitHub Copilot:claude-opus-4.7\n\n* docs(AGENTS.md): add model selection & cost discipline section\n\nAdds guidance on choosing between premium and cheap models for code-assistant work, including escalation/de-escalation triggers, sub-agent routing defaults, /fleet rules, and session-hygiene tips. Keeps premium reasoning for genuinely hard problems and routes mechanical work to cheaper models.\n\nAssisted-by: GitHub Copilot:claude-opus-4.7\n\n---------\n\nCo-authored-by: Kurtis Dinelle <kdinelle@microsoft.com>",
          "timestamp": "2026-05-28T14:15:50-07:00",
          "tree_id": "3706678d5b083a2b96f703e53cc322fda2233fb9",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/d6fb3ce5d9ae52ca51d6ef7b87518c6c4cb3c809"
        },
        "date": 1780004845260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 67.87,
            "unit": "KiB",
            "extra": "RAM Size: 9.53 KiB\nDependency Count: 329\nVersion: rustc 1.96.0 (ac68faa20 2026-05-25)"
          }
        ]
      }
    ],
    "dev-mcxa": [
      {
        "commit": {
          "author": {
            "email": "kdinelle@microsoft.com",
            "name": "Kurtis Dinelle",
            "username": "kurtjd"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0cde32f7405ea47765a0a716ca5f89a3d1863bb4",
          "message": "Update embedded-services + hals (#16)\n\n* Update embedded-services + hals\n\n* Remove unused embedded-io-async dep\n\n* Add cargo-vet audits and refresh imports for updated embassy dependencies\n\nAssisted-by: copilot-cli:claude-opus-4.6 cargo-vet",
          "timestamp": "2026-05-15T08:42:28-07:00",
          "tree_id": "662a01f3fd89ebdd38fc6bbf0b0a74aeac7777f5",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/0cde32f7405ea47765a0a716ca5f89a3d1863bb4"
        },
        "date": 1779131597086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 80.32,
            "unit": "KiB",
            "extra": "RAM Size: 14.98 KiB\nDependency Count: 329\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dymk@users.noreply.github.com",
            "name": "Dylan Knutson",
            "username": "dymk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "d3ae374f519792cd24f68127bd9eedae2e688483",
          "message": "Bump embedded-services, EC_TEST_CLI_REV, and embassy-time pins (#19)\n\n* Bump embedded-services, EC_TEST_CLI_REV, and embassy-time pins\n\nUpdate the embedded-services lockfile pins across all platforms to\npick up the v0.2.0 branch HEAD (f1f1e087), which includes:\n- PR #852: uart-service Service<R, M> generic over MctpMedium\n- PR #854: v0.2.0 mergeback (heapless 0.9.2, embassy-time 0.5.1)\n\nMigrate all platforms from the removed Service::new(relay) API to\nDefaultService::default_smbusespi(relay), which preserves the\nSmbusEspi wire format used by existing hardware platforms.\n\nBump EC_TEST_CLI_REV from e674ca93 to d705cd4f to pick up\nodp-platform-common PR #92, which adds SMBus PEC byte support to\nec-test-cli's serial transport — required by the post-#852\nSmbusEspiMedium.\n\nBump dev-npcx embassy-time pins from 0.5.0 to 0.5.1 and\nembassy-time-driver from 0.2.1 to 0.2.2, matching the transitive\nrequirements from the updated embedded-services.\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal\n\n* Add cargo-vet exemptions for bumped dependencies\n\nAdd safe-to-deploy exemptions for crate versions pulled in by the\nembedded-services v0.2.0 pin advancement. All are minor/patch version\nbumps of existing dependencies, except hashbrown 0.17.1 (new transitive\nfrom heapless 0.9).\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal\n\n* Fix stale embassy-sync policy rev in dev-npcx cargo-vet config\n\nReplace the rev-pinned policy key for embassy-sync with a generic\n[policy.embassy-sync] entry (matching dev-imxrt's approach), and add\nan exemption for the new git rev. The old rev (c8715fc1) no longer\nmatches the lockfile (e9c32931) after the embedded-services bump.\n\nAssisted-by: GitHub Copilot CLI:claude-opus-4.6-1m-internal",
          "timestamp": "2026-05-20T22:34:59-05:00",
          "tree_id": "e1eaae3fb4dddfd9383ef1aba28f8c85eff9a65b",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/d3ae374f519792cd24f68127bd9eedae2e688483"
        },
        "date": 1779477266945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.92,
            "unit": "KiB",
            "extra": "RAM Size: 14.99 KiB\nDependency Count: 327\nVersion: rustc 1.95.0 (59807616e 2026-04-14)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "blakejackson312006@gmail.com",
            "name": "Blake Jackson",
            "username": "bjackson312006"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95d998c2b5f563f5b1899870ac93517c83ff1a9a",
          "message": "Dev Platform for MEC1723 (#25)\n\n* basic setup\n\n* board.rs updated\n\n* compiled successfully\n\n* fixed comments in memory.x\n\n* updated config.toml\n\n* j-link issue\n\n* rtt works\n\n* no more uart error\n\n* buffered uart\n\n* rebase\n\n* update embassy-microchip fork and turn off [TRACE] logs\n\n* removed custom yaml, adjusted memory.x and link_ram.x to be consistent with the embassy example\n\n* renamed to dev-mec, changed Cargo.toml dependency branches\n\n* update deleted files on gh?\n\n* updated embedded-services to main",
          "timestamp": "2026-05-27T10:09:56-07:00",
          "tree_id": "d184055b8f2b4821faedef36f3e6c2385e9bf5e8",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/95d998c2b5f563f5b1899870ac93517c83ff1a9a"
        },
        "date": 1779994868242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.81,
            "unit": "KiB",
            "extra": "RAM Size: 14.99 KiB\nDependency Count: 328\nVersion: rustc 1.96.0 (ac68faa20 2026-05-25)"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "felipe.balbi@microsoft.com",
            "name": "Felipe Balbi",
            "username": "felipebalbi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6fb3ce5d9ae52ca51d6ef7b87518c6c4cb3c809",
          "message": "docs: add AGENTS.md and model-selection guidance (#26)\n\n* Add AGENTS.md for AI coding agents\n\nDocument the operational workflow autonomous coding agents need to\n\nbe productive in this repository: per-platform build/lint/test\n\ncommands, the no-workspace-root layout, required tooling\n\n(flip-link, cargo-deny), CI mirror script, code conventions\n\n(static allocation, Embassy async, defmt, lint strictness), and the\n\ncommit/AI-attribution/push policy.\n\nComplements .github/copilot-instructions.md, which remains the deep\n\nreference for architecture and conventions.\n\nAssisted-by: GitHub Copilot:claude-opus-4.7\n\n* docs(AGENTS.md): add model selection & cost discipline section\n\nAdds guidance on choosing between premium and cheap models for code-assistant work, including escalation/de-escalation triggers, sub-agent routing defaults, /fleet rules, and session-hygiene tips. Keeps premium reasoning for genuinely hard problems and routes mechanical work to cheaper models.\n\nAssisted-by: GitHub Copilot:claude-opus-4.7\n\n---------\n\nCo-authored-by: Kurtis Dinelle <kdinelle@microsoft.com>",
          "timestamp": "2026-05-28T14:15:50-07:00",
          "tree_id": "3706678d5b083a2b96f703e53cc322fda2233fb9",
          "url": "https://github.com/dymk/odp-embedded-controller/commit/d6fb3ce5d9ae52ca51d6ef7b87518c6c4cb3c809"
        },
        "date": 1780004820946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Binary Size",
            "value": 78.81,
            "unit": "KiB",
            "extra": "RAM Size: 14.99 KiB\nDependency Count: 328\nVersion: rustc 1.96.0 (ac68faa20 2026-05-25)"
          }
        ]
      }
    ]
  }
}