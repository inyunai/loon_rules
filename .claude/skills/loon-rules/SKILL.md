---
name: loon-rules
description: |
  管理 Loon 代理规则文件。当用户发送代理规则内容（DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/IP-CIDR/USER-AGENT/URL-REGEX 格式）
  或者提到"添加规则""更新规则""Loon 规则""代理规则""分流规则"时触发。
  规则来源不限：Gemini 给的、手写的、从其他仓库复制的都可以。
---

# Loon Rules Manager

管理 `d:\desktop\loon_rules` 仓库中的 Loon 代理规则，并将变更推送到 GitHub。

## 工作流程

### 1. 识别规则

用户消息中包含 Loon 格式的规则行（`TYPE,value`），类型包括：
- `DOMAIN` — 精确域名
- `DOMAIN-SUFFIX` — 域名后缀
- `DOMAIN-KEYWORD` — 域名关键词
- `IP-CIDR` — IP 段
- `USER-AGENT` — UA 匹配
- `URL-REGEX` — URL 正则

注释行以 `#` 开头，保留原样。

### 2. 确认归属

向用户确认：
- **平台名称**：规则属于哪个平台/应用（如 Bybit、OKX、Binance），用作文件名
- **合集归属**：放到哪个合集（如 trading、social、video）。如果用户不确定，根据平台类型推断：
  - 交易/金融 → `trading`
  - 社交/通讯 → `social`
  - 视频/流媒体 → `media`
  - AI/工具 → `tools`
  - 其他 → 新建合集或单独放

如果用户一次性指明了所有信息（如"把这些 Bybit 规则加到交易合集里"），跳过确认直接执行。

### 3. 写入文件

```
d:\desktop\loon_rules\
├── rules/
│   ├── <platform>.list    # 独立规则文件
│   └── <category>.list    # 合集文件（追加）
```

- **独立文件** `rules/<platform>.list`：写入完整规则内容，包含注释头
- **合集文件** `rules/<category>.list`：在对应区域追加新规则，用分隔注释标注平台名

如果合集文件中已有同名平台，**替换**旧内容而非追加重复。

### 4. 验证

写完后确认：
- 规则数量与声明一致（注释头的 TOTAL 数）
- 格式正确，每行都是 `TYPE,value` 或 `#` 注释
- 合集文件结构清晰，用 `# ===== 平台名 =====` 分隔不同平台

### 5. 更新 README

同步更新 `README.md` 中的规则统计表。

### 6. 提交并推送

```bash
cd "d:\desktop\loon_rules"
git add -A
git commit -m "feat: <简要描述>"
git push origin master
```

提交信息格式：`feat: add/update <平台名> rules`

## 示例

**输入：**
```
# NAME: Bybit
DOMAIN-SUFFIX,bybit.com
DOMAIN,api.bybit.com
```

**确认：** 平台=Bybit，合集=trading

**输出：**
- 写入 `rules/bybit.list`
- 追加到 `rules/trading.list` 的 Bybit 区域
- 更新 `README.md`
- commit: `feat: add Bybit rules`
- 推送后给出 Loon 引用链接
