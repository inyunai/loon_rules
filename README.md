# Loon Rules

Loon 代理规则集合。

## 目录结构

```
rules/
├── bybit.list      # Bybit 独立规则（12条）
├── okx.list        # OKX 独立规则（3条）
└── trading.list    # 交易平台合集（15条）
```

## 规则统计

| 规则集 | 数量 | 类型 |
|--------|------|------|
| Bybit | 12 | DOMAIN-KEYWORD ×1, DOMAIN-SUFFIX ×7, DOMAIN ×4 |
| OKX | 3 | DOMAIN-SUFFIX ×3 |
| **合集** | **15** | |

## 使用方式

### Loon 引用（推荐）

规则原始链接：
```
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/bybit.list
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/okx.list
https://raw.githubusercontent.com/inyunai/loon_rules/master/rules/trading.list
```

### 本地使用

将 `rules/` 目录下的 `.list` 文件导入 Loon 即可。

### DNS 污染说明

`raw.githubusercontent.com` 在国内可能被 DNS 污染（解析到 `0.0.0.0`），可改用：
- 修改 hosts：`185.199.108.133 raw.githubusercontent.com`
- 或使用代理访问

## 规则来源

- [blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script)
