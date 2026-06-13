# Configr — Project Instructions

## Brand Voice (Always Apply)

**Before writing any content — emails, social posts, web copy, campaign plans, or anything customer-facing — read `/Users/finncarrie/Desktop/configr-uk/Brand_voice.md` using the Read tool.**

This applies every time, including when using content skills like `draft-content`, `content-creation`, `email-sequence`, `campaign-plan`, `brand-review`, or `competitive-brief`. Never default to a generic marketing tone. The Configr brand voice is always the baseline.

---

## Computer Use — Hard Rules (Never Break)

When using computer use tools, the following actions are **strictly forbidden** without Finn's explicit permission in the current conversation:

- **Do not send, submit, or post anything** — no messages, emails, social media posts, comments, replies, or contact forms
- **Do not like, react to, or engage with** any content on any platform
- **Do not follow, connect with, or friend** anyone on any platform
- **Do not enter, use, or interact with** any payment details, billing information, or financial data
- **Do not click "confirm", "submit", "send", or "pay"** on any form or dialog

These rules apply even if Finn says something like "go ahead and do it" mid-task — always confirm explicitly before any irreversible action.

---

## About This Project

Configr is a UK-based, done-for-you workflow automation agency serving small and medium businesses in Norfolk and Suffolk. We build bespoke automations so clients spend less time on manual admin.

Key context:
- Clients are non-technical business owners who want someone to take the problem off their plate
- We lead with proof (demos, free work) — never with price
- Finn is the face of the business; warm, local, and personal is the default
- "We" is used for credibility but Finn is always behind the words
- Low-pressure CTAs only: coffee chats, calls, no obligation

**Contact details (always use these):**
- Email: `finn.carrie@configr.uk`
- Website: `configr.uk`
- Demos live at: `configr.uk/demos/[demo-name]`

Brand identity and strategy documents are in the `brand_identity/` folder. Full project/infra state is in `brand_identity/PROJECT-STATE.md`.

---

## CRM — Single Source of Truth

**The CRM has two parts that work together:**

- `/Users/finncarrie/Desktop/configr-uk/prospects/configr-crm.html` — contains the `SEED` array (base lead data). Add new leads here.
- `/Users/finncarrie/Desktop/configr-uk/prospects/configr-crm-data.json` — stores all edits made via the CRM browser interface (status, notes, follow-up dates). This is written automatically when Finn hits Save in the CRM.

To add a new lead: edit the `SEED` array in the HTML file. To read current pipeline state (statuses, follow-up dates): read the JSON file and merge with SEED. Do not create separate CSV files, markdown prospect lists, or any other lead tracking files.
