# Loon Rules

Loon 代理规则集合。

## 目录结构

```
rules/
├── bybit.list      # Bybit 独立规则（12条）
└── trading.list    # 交易平台合集
```

## 规则统计

| 规则集 | 数量 | 说明 |
|--------|------|------|
| Bybit | 12 | DOMAIN-KEYWORD ×1, DOMAIN-SUFFIX ×7, DOMAIN ×4 |

## 使用方式

### Loon 引用（推荐）

规则原始链接：
```
https://raw.githubusercontent.com/inyunai/loon_rules/main/rules/bybit.list
```

### 本地使用

将 `rules/` 目录下的 `.list` 文件导入 Loon 即可。

## 规则来源

- [blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script)
