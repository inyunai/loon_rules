---
name: loon-rules
description: |
  管理 Loon 代理规则文件。当用户发送代理规则内容（DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/IP-CIDR/USER-AGENT/URL-REGEX 格式）
  或者提到"添加规则""更新规则""Loon 规则""代理规则""分流规则"时触发。
  规则来源不限：Gemini 给的、手写的、从其他仓库复制的都可以。
  
  同时也管理代理图标。当用户提到"图标""icon""logo""策略图标""节点图标"以及
  带图片 URL 的链接（如 raw.githubusercontent.com 的 PNG 地址）时触发。
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

---

## 图标管理

### 获取图标

1. 用户给 PNG URL → 直接下载到 `icons/<平台名>.png`
2. 用户给 SVG → 先用 Inkscape 转 PNG（256×256），SVG 也保留作源文件：
   ```bash
   "C:/Program Files/Inkscape/bin/inkscape.exe" <input.svg> --export-type=png --export-filename="d:/desktop/loon_rules/icons/<平台名>.png" --export-width=256 --export-height=256
   ```
3. 用户只要某个平台的图标 → 按以下顺序找：
   - 先搜 Qure：`https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/<平台名>.png`
   - 没有就搜 Orz-3/mini
   - 再没有就用 GitHub API 搜 `<平台名> logo`，优先找 SVG 再转 PNG
   - `raw.githubusercontent.com` 被 DNS 污染时，用 GitHub API（`gh api repos/.../contents/...`）获取 base64 内容再解码

### 写入图标

保存到 `d:\desktop\loon_rules\icons/` 目录，更新 `icons/README.md` 中的图标列表。

### 引用链接

```
https://raw.githubusercontent.com/inyunai/loon_rules/master/icons/<平台名>.png
```

---

## 规则示例

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

## 图标示例

**输入：** "帮我找 Bybit 的图标" 或直接给一个图标 URL

**输出：**
- 下载/转换到 `icons/Bybit.png`
- 更新 `icons/README.md`
- commit: `feat: add Bybit icon`
- 推送后给出图标引用链接
