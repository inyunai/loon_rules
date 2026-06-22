# Loon Rules

Loon / Quantumult X 代理规则、重写脚本集合。

## 目录结构

```
├── rules/
│   ├── bybit.list          # Bybit 规则（12条）
│   ├── douyin.list         # 抖音规则（22条）
│   ├── trading.list        # 交易平台合集
│   └── social.list         # 社交/短视频合集
├── rewrite/
│   ├── spotify-fixed.js    # Spotify 解锁脚本
│   ├── spotify-fixed.snippet     # QX 重写规则（Anti-Logout）
│   └── spotify-premium.snippet   # QX 重写规则（Stability）
├── icons/
│   ├── Bybit.png           # Bybit 图标 256×256
│   └── Bybit.svg           # Bybit 图标源文件
└── .claude/skills/
    └── loon-rules/         # 规则管理 Skill
```

## 规则统计

| 规则集 | 数量 | 类型 |
|--------|------|------|
| Bybit | 12 | DOMAIN-KEYWORD ×1, DOMAIN-SUFFIX ×7, DOMAIN ×4 |
| 抖音 | 22 | DOMAIN ×2, DOMAIN-SUFFIX ×20 |
| 合集 | 34 | |

## 使用方式

### Loon 引用

规则：
```
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/bybit.list
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/douyin.list
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/trading.list
```

图标：
```
https://raw.githubusercontent.com/inyunai/loon_rules/master/icons/Bybit.png
```

重写脚本：
```
https://raw.githubusercontent.com/inyunai/loon_rules/master/rewrite/spotify-fixed.js
```

### DNS 污染说明

`raw.githubusercontent.com` 在国内可能被 DNS 污染（解析到 `0.0.0.0`），可修改 hosts：
```
185.199.108.133 raw.githubusercontent.com
```

## 规则来源

- [blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script)
