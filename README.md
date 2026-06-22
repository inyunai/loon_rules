# Loon Rules

Loon 代理规则集合。

## 目录结构

```
├── rules/
│   ├── bybit.list      # Bybit 独立规则（12条）
│   └── trading.list    # 交易平台合集
├── icons/
│   ├── Bybit.png       # Bybit 图标 256x256
│   └── Bybit.svg       # Bybit 图标源文件
└── .claude/skills/
    └── loon-rules/     # 规则管理 Skill
```

## 规则统计

| 规则集 | 数量 | 类型 |
|--------|------|------|
| Bybit | 12 | DOMAIN-KEYWORD ×1, DOMAIN-SUFFIX ×7, DOMAIN ×4 |

## 使用方式

### Loon 引用（推荐）

规则链接：
```
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/bybit.list
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/trading.list
```

图标链接：
```
https://raw.githubusercontent.com/inyunai/loon_rules/master/icons/Bybit.png
```

### 本地使用

将 `rules/` 目录下的 `.list` 文件导入 Loon 即可。

### DNS 污染说明

`raw.githubusercontent.com` 在国内可能被 DNS 污染（解析到 `0.0.0.0`），可修改 hosts：
```
185.199.108.133 raw.githubusercontent.com
```

## 规则来源

- [blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script)
