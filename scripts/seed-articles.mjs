/**
 * Seeds 25 synthetic insurance help articles into content/articles/*.md
 * for the RAG corpus.
 *
 * Run once:  node scripts/seed-articles.mjs
 *
 * Each article gets:
 *   - title (human-readable)
 *   - slug  (URL/file id)
 *   - category (claims, coverage, billing, auto, health, life, travel, home)
 *   - summary (one-liner used in search and source chips)
 *   - updated (ISO date)
 *   - body (markdown)
 *
 * Categories cover the assignment brief's sample questions.
 * Articles are AI-synthetic and intentionally insurer-agnostic.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const UPDATED = "2026-04-25";
const OUT_DIR = "content/articles";

const articles = [
  // ============================ CLAIMS ============================
  {
    slug: "how-to-submit-car-accident-claim",
    title: "How to submit a car accident claim",
    category: "claims",
    summary:
      "Step-by-step process for filing an auto insurance claim after an accident, including required documents and timing.",
    body: `# How to submit a car accident claim

Filing a claim quickly speeds up your repair and settlement timeline. Follow these steps in order.

## 1. Make sure everyone is safe
Move vehicles out of traffic if drivable. Call emergency services if anyone is injured.

## 2. Document the scene
Take photos of all vehicles, license plates, road conditions, and visible damage. Get the other driver's name, contact, license number, insurance company, and policy number.

## 3. File a police report
For accidents involving injury, significant damage, or another driver's fault, request a police report. The report number is required for most claim filings.

## 4. Notify us within 72 hours
Open a claim through the mobile app, web portal, or by calling our 24/7 claims line. You'll receive a claim number immediately.

## 5. Submit supporting documents
Upload photos, the police report, and any medical receipts. A claims adjuster will be assigned within 1 business day.

## 6. Schedule an inspection
The adjuster will arrange either a virtual or in-person inspection to assess damage and confirm coverage.

## What happens next
Most car accident claims are processed within 7-14 business days from full document submission. Repair shops in our preferred network can begin work as soon as the estimate is approved.`,
  },

  {
    slug: "claim-processing-timeline",
    title: "How long does a claim take to process",
    category: "claims",
    summary:
      "Typical timelines for processing different types of insurance claims and what affects how long it takes.",
    body: `# How long does it take to process a claim?

Processing times vary by claim type and complexity. Here are typical timelines once we have all required documents.

## Auto claims
- **Minor damage (dent, glass):** 3-7 business days
- **Major collision repairs:** 7-14 business days
- **Total loss settlement:** 14-30 business days
- **Bodily injury claims:** 30-60 business days; longer for cases with ongoing medical treatment

## Home claims
- **Single-event damage (storm, theft):** 10-21 business days
- **Water damage with mitigation:** 14-30 business days
- **Major structural claims (fire):** 30-90 business days

## Health claims
- **In-network direct billing:** 3-10 business days
- **Out-of-network reimbursement:** 14-30 business days

## What can delay processing
- Missing documents (police report, medical records, photos)
- Pending third-party investigations
- Disputed liability
- Out-of-network providers requiring additional review

## How to speed it up
Submit all requested documents at once, respond to adjuster questions within 24 hours, and use our preferred repair network when possible. The mobile app shows real-time progress and the next required step.`,
  },

  {
    slug: "documents-needed-for-a-claim",
    title: "Documents you need to file a claim",
    category: "claims",
    summary:
      "List of required documents for different claim types and how to submit them through the portal or mobile app.",
    body: `# Documents needed to file a claim

Having the right documents ready prevents delays. Submit them through the mobile app or web portal under "My Claims."

## All claim types
- Your policy number
- Date, time, and location of the incident
- A description of what happened
- Government-issued ID

## Auto claims
- Photos of all vehicle damage and the scene
- The other driver's information (name, insurance, license plate)
- Police report number, if applicable
- Vehicle registration

## Home claims
- Photos and video of the damage
- Receipts for any temporary repairs or mitigation costs
- Inventory list with estimated values for stolen or destroyed items
- Police report number for theft or vandalism

## Health claims
- Itemized bill from the provider
- Medical records or diagnostic notes
- Explanation of Benefits (EOB) if processed by another carrier
- Receipts for prescriptions or medical equipment

## Travel claims
- Boarding passes and original itinerary
- Receipts for canceled bookings or replacement purchases
- Written confirmation from the airline or hotel
- Medical certificate, if illness is the reason

## How to submit
Upload all documents at once whenever possible — submitting in pieces extends processing time. PDF and JPG are preferred. The portal accepts files up to 25 MB each.`,
  },

  {
    slug: "tracking-claim-status",
    title: "How to track your claim status",
    category: "claims",
    summary:
      "How to check the status of an active claim through the app, web portal, or by phone, and what each status means.",
    body: `# Tracking your claim status

You can check your claim status anytime through three channels.

## Mobile app
Tap "My Claims" on the home screen. Each active claim shows its current stage, the assigned adjuster's name, and any pending actions on your side.

## Web portal
Sign in at the customer portal and select "Claims." The same status timeline is available with downloadable PDFs of every document on file.

## Phone
Call our claims line with your claim number. Available 24/7 for general status updates; specialized adjusters are available 9am-6pm in your local time zone.

## What the statuses mean
- **Filed** — We received your initial report. Adjuster assignment typically happens within 1 business day.
- **Under review** — Adjuster is verifying coverage and reviewing documents.
- **Inspection scheduled** — A virtual or in-person inspection is on the calendar.
- **Adjuster review** — Damage assessment in progress; estimate being prepared.
- **Settlement offered** — A payout amount has been proposed; respond to accept or dispute.
- **Approved for repair** — Work can begin at any in-network shop.
- **Payment issued** — Funds have been released; allow 3-5 business days for ACH or 7-10 days for check.
- **Closed** — Claim is fully settled and no further action is needed.

## Notifications
Push notifications and emails fire on every status change. You can also opt into SMS updates from the Notifications page in your account settings.`,
  },

  {
    slug: "disputing-a-denied-claim",
    title: "Disputing a denied claim",
    category: "claims",
    summary:
      "Steps to dispute a claim that was denied or partially paid, including the appeals process and external review options.",
    body: `# Disputing a denied claim

If your claim was denied or paid less than expected, you have the right to appeal. Most disputes are resolved within 30 days.

## 1. Read the denial letter carefully
The letter explains the specific reason for denial — common ones include policy exclusion, missing documentation, or coverage limits exceeded.

## 2. Gather supporting evidence
Collect anything that addresses the stated reason: additional photos, medical records, repair estimates from independent shops, expert opinions, or copies of policy language you believe applies.

## 3. File a formal appeal within 60 days
Submit an appeal through the customer portal under "My Claims → Dispute." Include a written explanation referencing the denial reason and attach all evidence.

## 4. Internal review (10-30 days)
A senior claims specialist who was not involved in the original decision will re-examine your claim. You'll be notified of the outcome in writing.

## 5. External review options
If the internal appeal upholds the denial, you have additional options:
- **State insurance department complaint** — Free service that mediates between you and the insurer.
- **Independent external review** — A neutral third party reviews health claims; binding for certain claim types.
- **Small-claims court** — For amounts below your state's threshold, often $5,000-$10,000.

## What to avoid
Do not file a duplicate claim under a different number — this typically extends the process. Keep all communication in writing through the portal so there's a clear paper trail.`,
  },

  // ============================ COVERAGE ============================
  {
    slug: "what-is-a-deductible",
    title: "What is a deductible",
    category: "coverage",
    summary:
      "Plain-language explanation of how deductibles work, with examples for auto, home, and health insurance.",
    body: `# What does deductible mean in my policy?

A **deductible** is the amount you pay out of pocket on a covered claim before your insurance starts paying. It's listed on your policy declarations page.

## How it works — simple example
Imagine you have a $500 deductible on your auto policy and you cause $3,000 in damage.

- You pay the first **$500**
- Insurance pays the remaining **$2,500**

If the damage was only $400, you'd pay the entire amount yourself — the claim would be below your deductible.

## Why deductibles exist
A deductible keeps small claims out of the insurance system. This lowers everyone's premium because insurers don't have to process every minor scratch or scrape.

## Choosing a deductible amount
- **Higher deductible** → lower monthly premium, more out-of-pocket cost when something happens
- **Lower deductible** → higher monthly premium, less out-of-pocket cost when something happens

A common rule: pick a deductible you can comfortably pay from savings without financial strain.

## Per-incident vs annual
- **Per-incident** (auto, home): you pay the deductible **each time** you file a claim
- **Annual** (most health plans): you pay up to the deductible **once per year** across all claims

## Special cases
- **Glass-only auto claims** often have a $0 deductible
- **Hurricane and earthquake** coverage frequently has a separate, higher deductible (often a percentage of the home's insured value)
- **Health preventive care** is usually exempt from deductibles entirely`,
  },

  {
    slug: "understanding-coverage-limits",
    title: "Understanding coverage limits",
    category: "coverage",
    summary:
      "How coverage limits work, the difference between per-incident and aggregate limits, and how to know if yours are high enough.",
    body: `# Understanding coverage limits

A **coverage limit** is the maximum amount your insurer will pay on a covered claim. Going over the limit means you pay the rest out of pocket.

## Two types of limits
- **Per-incident limit** — maximum paid for a single event (e.g., $50,000 per accident)
- **Aggregate limit** — maximum paid across all events in a policy period (e.g., $250,000 per year)

Most personal policies use per-incident limits. Some commercial and umbrella policies stack both.

## Common auto limits
Liability is usually written as three numbers like 100/300/100:
- $100,000 bodily injury per person
- $300,000 bodily injury per accident
- $100,000 property damage per accident

## Common home limits
- **Dwelling** — what it costs to rebuild your home
- **Personal property** — typically 50-70% of the dwelling limit
- **Liability** — $100k to $500k for accidents at your residence
- **Loss of use** — usually 20% of dwelling, covers temporary housing

## When to raise your limits
- Net worth has grown — limits should match what could be at risk in a lawsuit
- You added expensive items (jewelry, art, electronics) — itemize them or raise personal property
- You renovated — rebuild cost likely went up
- You started a side business or rideshare — standard policies may not cover commercial use

## Umbrella policies
For an extra $20-50/month, an umbrella policy adds $1M+ of liability coverage on top of your auto and home limits — often the cheapest way to protect significant assets.`,
  },

  {
    slug: "comprehensive-vs-collision",
    title: "Comprehensive vs collision coverage",
    category: "coverage",
    summary:
      "The difference between comprehensive and collision auto coverage and when to keep, drop, or both.",
    body: `# Comprehensive vs collision coverage

Both coverages pay to repair or replace your own car, but they cover different events.

## Collision
Pays when your vehicle hits something — another car, a pole, a guardrail, or rolls over. It applies regardless of who is at fault.

**Examples:**
- Single-car accident on icy roads
- Fender bender in a parking lot
- Hitting a deer (in some states this is filed under comprehensive — check your policy)

## Comprehensive
Pays for damage **not** caused by collision. Often called "other-than-collision" coverage.

**Examples:**
- Theft of the vehicle or items inside
- Vandalism, fire, or falling tree branches
- Hail, flood, or hurricane damage
- Animal damage (chewed wiring, kicked panels)
- A cracked windshield from a road rock

## Do you need both?
- **Newer car or financed/leased vehicle** — usually required by your lender; keep both
- **Older car (less than $2,500-$3,000 actual cash value)** — often more economical to drop both, since the maximum payout is capped at the car's depreciated value
- **High-theft area** — keep comprehensive even on older cars
- **Garage-kept, low-mileage** — collision risk is lower; comprehensive may still make sense for weather/theft

## Deductibles
Each has its own deductible. A common pattern is $250 comprehensive (since these claims are often smaller) and $500 collision.`,
  },

  {
    slug: "liability-coverage-explained",
    title: "Liability coverage explained",
    category: "coverage",
    summary:
      "What liability coverage protects against, how limits work, and how to choose appropriate amounts.",
    body: `# Liability coverage explained

Liability coverage pays for harm **you cause to others** — their bodies, their property, or both. It does not pay for your own injuries or damage.

## Two parts
- **Bodily injury liability** — medical bills, lost wages, and legal costs for people you injured
- **Property damage liability** — repair or replacement of property you damaged (other vehicles, fences, mailboxes, buildings)

## How the numbers are written
You'll often see liability shown as three numbers, e.g., 100/300/100:
- $100,000 — maximum bodily injury **per person**
- $300,000 — maximum bodily injury **per accident** (across all injured people)
- $100,000 — maximum property damage per accident

## State minimums vs adequate coverage
Every state sets minimum required limits, but state minimums are typically far below the cost of a serious accident. A single hospitalization can exceed $100,000.

**Recommended:** at least 100/300/100 for most drivers, more if you have significant assets to protect.

## What liability does NOT cover
- Your own injuries (that's medical payments or PIP)
- Your own car (that's collision/comprehensive)
- Intentional acts or criminal activity
- Damage to property you own or are renting
- Business use of a personal vehicle

## Beyond auto
Home and renters policies also include personal liability — typically $100k-$500k — for things like a guest tripping on your steps or your dog biting a neighbor.

## Umbrella add-on
If your potential exposure exceeds your liability limits, an umbrella policy adds $1M+ for ~$200-$500/year and is usually the cheapest way to fill the gap.`,
  },

  {
    slug: "what-is-a-premium",
    title: "What is a premium",
    category: "coverage",
    summary:
      "Definition of insurance premium, factors that affect it, and ways to lower yours.",
    body: `# What is a premium?

Your **premium** is the amount you pay to keep your insurance policy active. It's typically billed monthly, every six months, or annually.

## What goes into a premium

**For auto:**
- Driving record (accidents, violations)
- Age, credit-based insurance score (in most states)
- Vehicle make, model, age, and safety features
- Annual mileage and where you garage the car
- Coverage limits and deductibles you choose

**For home:**
- Replacement cost of the home
- Location and risk of weather, fire, or theft
- Construction materials and age
- Claims history at the property
- Distance to fire hydrant and station

**For health:**
- Age and tobacco use
- Plan tier (bronze, silver, gold, platinum)
- Geographic region
- Whether dependents are included

## How to lower your premium
- Raise your deductible
- Bundle home and auto with the same insurer (typical savings: 10-25%)
- Maintain a clean driving and claims record
- Keep good credit (in states where it's used)
- Take advantage of discounts: safe driver, good student, defensive driving course, paperless billing, paid in full
- Review coverage annually — drop unneeded options as cars age or assets change

## What raises your premium
- New at-fault accidents or moving violations
- Filing multiple small claims
- Adding teen drivers
- Renovating without notifying your home insurer
- Changing to a higher-risk vehicle

## When premiums change
You'll see your premium recalculated at each renewal. Changes mid-policy are unusual unless you add or remove coverage.`,
  },

  // ============================ BILLING ============================
  {
    slug: "how-to-pay-your-premium",
    title: "How to pay your premium",
    category: "billing",
    summary:
      "Available payment methods, billing schedules, and how to update your billing information.",
    body: `# How to pay your premium

You can pay your premium through several channels. The fastest and most reliable is autopay through the customer portal.

## Online (recommended)
Sign in at the customer portal or mobile app and go to **Billing → Make a Payment**. Accepted methods:
- Bank account (ACH) — no fees, processes in 1-3 business days
- Credit or debit card — small convenience fee may apply
- Apple Pay or Google Pay

## Phone
Call our 24/7 automated payment line. Have your policy number and bank/card info ready.

## Mail
Send a check or money order with your remittance slip to the address on the bill. Allow 7-10 business days for processing — late fees may apply if mailed close to the due date.

## In person
At any branch or partner location. Cash, check, or card accepted. Receipt is provided immediately.

## Billing schedules
- **Monthly** — default for most personal policies
- **Quarterly** — discounted by 1-2%
- **Semi-annual** — discounted by 3-5%
- **Annual (paid in full)** — discounted by 5-10%

## Updating billing info
Update your bank or card under **Billing → Payment Methods**. Changes take effect the next billing cycle. If a payment fails, we'll notify you within 24 hours and try again automatically.

## Receipts and statements
Every payment generates a PDF receipt available in the portal under **Billing → History**. Annual statements for tax purposes are released each January.`,
  },

  {
    slug: "setting-up-autopay",
    title: "Setting up autopay",
    category: "billing",
    summary:
      "How to enable autopay, what happens if a charge fails, and how to cancel autopay if needed.",
    body: `# Setting up autopay

Autopay automatically charges your premium on the due date so you never miss a payment. Most policyholders save 1-3% on their premium just by enrolling.

## Enrolling
1. Sign in to the customer portal or mobile app
2. Go to **Billing → Autopay**
3. Choose a payment method: bank account or card
4. Confirm the billing date — usually your policy renewal day, but you can shift it ±5 days
5. Review and authorize

You'll receive an email confirmation. Autopay activates with your next billing cycle.

## When charges happen
Charges run at 6:00 AM in your local time zone on the scheduled date. Funds typically clear in 1-3 business days for ACH and same-day for cards.

## If a charge fails
- We retry automatically after 3 business days
- An email and SMS notification is sent immediately on failure
- After two failed attempts, autopay is paused and you'll need to make a manual payment

A failed charge does not immediately cancel your policy. You enter a grace period (typically 10 days for auto, 30 days for life and health) during which coverage continues.

## Changing or canceling
You can change the payment method, billing date, or cancel autopay anytime from the portal. Changes take effect with the next cycle. Canceling autopay does not cancel your policy — only the automatic-charge schedule.

## Best practices
- Set up an alert for low balance on the linked account
- Keep a backup payment method on file
- Review billing dates if you change jobs or pay schedules`,
  },

  {
    slug: "missed-payment-grace-period",
    title: "What happens if you miss a payment",
    category: "billing",
    summary:
      "How grace periods work, when coverage lapses, and how to reinstate a canceled policy.",
    body: `# What happens if you miss a payment

Missing a payment doesn't immediately cancel your policy — every policy has a grace period. After that, coverage can lapse, and reinstating may cost more.

## Grace periods by line
- **Auto** — typically 10 days from the due date
- **Home** — typically 10-30 days
- **Health** — typically 30-90 days (longer if subsidized through the marketplace)
- **Life** — 30 days standard

During the grace period, your coverage stays active. If a claim happens, it's still covered as long as you bring the account current within the grace window.

## After the grace period
If payment isn't received by the end of the grace period, your policy enters **lapse** status:
- Auto: cancellation effective the day after the grace period ends
- Home and health: cancellation effective at the end of the grace period
- Life: policy may convert to "non-forfeiture" provisions if cash value exists

A lapse means **no coverage**. Driving without insurance is illegal in most states; mortgage lenders may force-place expensive coverage if home insurance lapses.

## Reinstating
- Within 30 days of lapse — usually possible by paying the past-due amount; no re-underwriting required
- 30-90 days — may require a short application and inspection
- After 90 days — typically a new policy at current rates, often higher

## How to avoid this
- Enroll in autopay
- Set calendar reminders for due dates
- Keep email and phone number current so we can reach you
- Use the mobile app's "Pay before lapse" alert in Settings

If you're facing financial difficulty, contact us **before** the grace period ends — we can often arrange a payment plan or temporary deferral.`,
  },

  // ============================ AUTO ============================
  {
    slug: "roadside-assistance",
    title: "Roadside assistance coverage",
    category: "auto",
    summary:
      "What's covered under roadside assistance, how to request help, and limits on usage.",
    body: `# Roadside assistance coverage

Roadside assistance gets you back on the road when your car won't move. It's an optional add-on for most auto policies.

## What's covered
- **Towing** — typically up to 25 miles to the nearest qualified repair shop
- **Battery jump-start**
- **Flat tire change** — using your spare
- **Lockout service** — when keys are locked inside or lost
- **Fuel delivery** — emergency 1-2 gallons, fuel cost reimbursable
- **Winching** — pulling your vehicle out if stuck within 50 feet of a paved road

## What's not covered
- Repair costs at the shop (that's your normal mechanic or warranty)
- Labor beyond the standard 30-60 minutes per call
- Impound or storage fees
- Replacement parts
- Damage during recovery (covered separately under collision)

## How to request service
- **Mobile app** (fastest) — tap **Get help → Roadside** and your GPS auto-fills the location
- **Phone** — 24/7 dispatch line
- Average dispatch time is 30-60 minutes depending on location

## Usage limits
- Typically 4 service calls per policy year
- Each tow counts as 1 call regardless of distance
- Going over the limit triggers per-incident fees, billed to your card on file

## Adding coverage
You can add roadside assistance to most auto policies for $5-$15/month. It's effective immediately upon enrollment unless you call within 6 hours of adding (waiting period prevents fraud).

## Membership vs insurance
If you have AAA, an auto club, or a credit card with included roadside, you can use either. Filing through your insurer doesn't typically affect your premium since it's not a claim against your liability or comprehensive coverage.`,
  },

  {
    slug: "rental-car-coverage",
    title: "Rental car coverage",
    category: "auto",
    summary:
      "How your auto policy applies to rental cars, what the rental counter add-ons cover, and when you might need extra protection.",
    body: `# Rental car coverage

Most personal auto policies extend to rental cars in the U.S. and Canada — but coverage isn't unlimited.

## What your policy typically covers
- **Liability** — same limits as your regular policy, while you drive the rental
- **Collision** — pays for damage to the rental, minus your collision deductible
- **Comprehensive** — theft, vandalism, or weather damage to the rental, minus your comprehensive deductible

## What your policy may not cover
- **Loss of use** — the rental company's lost rental income while their car is being repaired
- **Diminished value** — drop in resale value of the rental after a repair
- **Administrative fees** — towing, paperwork, agent time
- **Rentals outside the U.S./Canada** — most policies do not extend abroad

## Rental counter coverage options
At the counter you'll be offered some or all of:
- **Loss Damage Waiver (LDW)** — waives your responsibility for damage; covers gaps in your auto policy
- **Liability Insurance** — extra liability above your personal limits
- **Personal Accident Insurance** — covers your medical costs in the rental
- **Personal Effects Coverage** — covers stolen items in the rental

## Credit card coverage
Many credit cards include rental car coverage automatically when you pay with that card. It's typically secondary (kicks in after your auto policy) and often excludes loss of use and certain vehicle classes (luxury, exotic, large trucks).

## When to buy at the counter
- Renting outside the U.S./Canada
- Driving a vehicle class your policy excludes
- Your auto policy has high deductibles you'd rather avoid
- Business travel — your employer's policy may require it

## When to skip
- Domestic rental, you have collision/comprehensive, and your card has secondary coverage — you're typically well-protected without paying ~$30/day at the counter.`,
  },

  {
    slug: "teen-driver-coverage",
    title: "Teen driver coverage",
    category: "auto",
    summary:
      "Adding a teen driver to your policy, expected premium impact, and discounts that can offset the cost.",
    body: `# Teen driver coverage

Adding a teen to your auto policy is required as soon as they have a learner's permit or driver's license — even if they don't yet have their own car.

## When to add them
- **Learner's permit** — In most states, no extra premium until they're licensed (they're considered supervised)
- **Driver's license** — Must be added immediately as a rated driver
- **Off at college without the car** — In many states you can keep them on at a lower "occasional driver" rate, especially if they're 100+ miles from home

## Premium impact
Adding a 16-year-old typically increases the household premium by 50-150%. The increase tapers as they age and gain a clean record:
- 16-18: highest impact
- 19-21: still elevated, but down ~20-30%
- 25+: rates typically converge with adult drivers

## Available discounts
- **Good student** — 5-15% off for B average or better
- **Driver's education** — 5-10% off for completing an approved course
- **Distant student** — discount when they're at school without the car
- **Telematics / safe driving app** — track driving habits for usage-based discounts
- **Multi-car** — adding a second vehicle for the teen sometimes lowers rates because the teen becomes the primary driver of a single, often older, less expensive car

## Coverage tips
- Keep teens off newer or higher-value vehicles when possible
- Maintain comprehensive and collision on whatever they drive — teen accidents are common
- Consider raising liability limits — at-fault accidents involving teens often exceed minimum limits

## What to avoid
Don't omit a teen from the policy. If they cause an accident in your car and aren't listed, the claim can be denied and you may face cancellation or a fraud finding.`,
  },

  // ============================ HEALTH ============================
  {
    slug: "choosing-a-health-plan",
    title: "Choosing a health plan",
    category: "health",
    summary:
      "Comparison of HMO, PPO, EPO, and HDHP plan types and how to pick the right one for your needs.",
    body: `# Choosing a health plan

The right health plan depends on three factors: how often you see doctors, whether you have preferred providers, and how much risk you can absorb out of pocket.

## Plan types

### HMO (Health Maintenance Organization)
- **Lowest premiums and copays**
- **Requires** a primary care physician (PCP) and referrals to see specialists
- **No coverage** outside the network except emergencies
- Good for: people willing to stay in-network for predictable, lower costs

### PPO (Preferred Provider Organization)
- **Higher premiums** but more flexibility
- **No referrals** needed
- **Out-of-network** care is covered, just at lower percentages
- Good for: people who want to see specialists directly or have providers across networks

### EPO (Exclusive Provider Organization)
- Middle ground: PPO-like flexibility (no referrals) with HMO-like network rules (no out-of-network coverage except emergencies)
- Good for: people who don't need referrals but are fine staying in-network

### HDHP (High-Deductible Health Plan)
- **Lowest premiums, highest deductible**
- Pairs with a Health Savings Account (HSA) for tax-advantaged savings
- Good for: healthy people with low expected medical use, or those wanting to use the HSA for retirement savings

## How to compare costs
Look at **total expected annual cost**, not just premium:
- 12 × monthly premium
- + expected copays and prescriptions
- + likely out-of-pocket up to the deductible
- − any HSA tax savings

## Network check
Before enrolling, look up your current providers in each plan's directory. A "cheaper" plan that excludes your doctor isn't actually cheaper.

## Special considerations
- Pregnancy or planned surgeries → PPO with strong maternity / surgical network
- Chronic condition with regular specialist visits → EPO or PPO with that specialist in-network
- Generally healthy → HDHP + HSA is usually the lowest total cost`,
  },

  {
    slug: "in-network-vs-out-of-network",
    title: "In-network vs out-of-network providers",
    category: "health",
    summary:
      "How network status affects what you pay, balance billing protections, and how to verify a provider is in-network.",
    body: `# In-network vs out-of-network

A **network** is the group of doctors, hospitals, labs, and pharmacies that have agreed to negotiated rates with your insurance plan.

## In-network
- Providers accept your insurer's contracted rate
- You pay your standard copay or coinsurance after deductible
- Costs apply toward your annual out-of-pocket maximum
- No "balance billing" — provider can't charge you the difference between their list price and the contracted rate

## Out-of-network
- Provider has no contract with your insurer
- Insurer pays a lower percentage (or nothing on HMO/EPO plans)
- You may be responsible for the difference between billed and "allowed" amounts (balance billing)
- Out-of-network costs typically count toward a separate, higher out-of-pocket maximum

## How to check network status
1. Use the provider directory in your insurer's portal — search by name, specialty, or ZIP
2. Call the provider's office and ask "Are you in-network with [plan name and ID]?" — generic "we accept your insurance" isn't enough
3. For hospitals, also confirm specialists (anesthesiologist, radiologist) are in-network — they often bill separately

## When out-of-network is unavoidable
- **Emergencies** — federal law requires in-network cost-sharing for emergency care, even at out-of-network ERs
- **No in-network specialist** — you can request a network gap exception; if approved, the visit is treated as in-network
- **Surprise billing** — the No Surprises Act protects you from balance bills for ER care, certain ancillary services at in-network facilities, and air ambulance — you only owe in-network amounts

## Tips
- Always verify before scheduling a non-emergency procedure
- Ask for an estimate in writing
- Save Explanation of Benefits (EOB) statements — they show what was billed, allowed, and paid`,
  },

  {
    slug: "preventive-care-coverage",
    title: "Preventive care coverage",
    category: "health",
    summary:
      "What preventive services are covered at no cost under most health plans and how to make sure your visit is coded correctly.",
    body: `# Preventive care coverage

Under the Affordable Care Act, most non-grandfathered health plans must cover a list of preventive services with **$0 cost-sharing** when you use in-network providers — no copay, no deductible, no coinsurance.

## What's covered

**For all adults:**
- Annual wellness visit
- Blood pressure, cholesterol, and diabetes screening
- Depression screening
- Tobacco use counseling
- Vaccinations (flu, COVID, shingles, etc.)

**For women:**
- Mammography (40+ for many guidelines, varies by risk factors)
- Cervical cancer screening
- Contraception and counseling
- Prenatal and well-woman visits

**For children:**
- Well-child visits and developmental screening
- Vision and hearing screening
- All recommended vaccinations
- Behavioral and developmental assessments

**For seniors (age-based):**
- Bone density scan
- Colorectal cancer screening
- Aortic aneurysm screening for certain men 65-75

## How to make sure you're not charged
- Confirm the appointment is **billed as preventive**, not diagnostic
- Use an **in-network** provider — out-of-network preventive often isn't free
- Avoid combining with non-preventive visits — if your doctor evaluates a new symptom during the same visit, that portion may be billed as a regular office visit

## What is NOT preventive
- Follow-up tests after an abnormal screening (those are diagnostic)
- Specialist visits for symptoms (e.g., dermatology for a rash)
- Lab work outside the recommended preventive list

## Tip
If you receive an unexpected bill for a preventive service, call the provider's billing office and your insurer. Coding errors are common and easy to correct.`,
  },

  // ============================ LIFE ============================
  {
    slug: "term-vs-whole-life",
    title: "Term vs whole life insurance",
    category: "life",
    summary:
      "The differences between term and whole life insurance, costs, cash value, and how to choose between them.",
    body: `# Term vs whole life insurance

Both pay a death benefit to your beneficiaries, but they're built very differently.

## Term life
- **Coverage for a set period** — typically 10, 20, or 30 years
- **No cash value** — when the term ends, coverage ends
- **Lowest cost** — a healthy 35-year-old can get $500,000 / 20-year term for $25-$40/month
- **Best for:** replacing income while you have dependents, mortgage, or other temporary obligations

## Whole life
- **Coverage for life** — never expires as long as premiums are paid
- **Builds cash value** — a portion of each premium grows tax-deferred at a guaranteed rate, often supplemented by dividends
- **Higher cost** — same person above might pay $400-$700/month for $500,000 of whole life
- **Best for:** estate planning, tax-advantaged savings after maxing other accounts, lifetime guaranteed coverage for special-needs dependents

## Key differences

| Feature | Term | Whole life |
|---|---|---|
| Cost (per $1k of coverage) | Low | 5-15× higher |
| Coverage duration | Fixed term | Lifetime |
| Cash value | None | Yes, grows over time |
| Premium structure | Level for the term | Level for life |
| Loans against policy | No | Yes |

## Common pattern: "buy term and invest the difference"
For most people, term life plus investing the premium savings in a 401(k), IRA, or index fund beats whole life on long-term wealth — because retail mutual funds typically beat insurance internal returns.

## When whole life makes sense
- You've maxed out tax-advantaged retirement accounts
- You want guaranteed lifetime coverage (e.g., a child with disabilities)
- Estate is large enough that estate-planning use cases matter
- You value the certainty over potential market upside

## What to avoid
- Buying whole life as a "savings vehicle" before maxing retirement accounts
- Replacing existing whole life policies — surrender charges in early years can be steep
- Assuming illustrated dividends are guaranteed (only the base interest rate is)`,
  },

  {
    slug: "naming-a-beneficiary",
    title: "Naming a beneficiary",
    category: "life",
    summary:
      "How to name and update beneficiaries on a life insurance policy and common mistakes to avoid.",
    body: `# Naming a beneficiary

Your **beneficiary** is the person (or trust, or estate) who receives the death benefit when you die. Naming them correctly avoids probate and delays.

## Types of beneficiaries
- **Primary** — first in line. You can list multiple primaries with percentages (e.g., spouse 50%, two children 25% each).
- **Contingent** — receives the benefit if all primaries are deceased. Always name at least one contingent.

## How to name one
You'll need:
- Full legal name
- Date of birth
- Social Security number (recommended; speeds up the claim)
- Relationship to you
- Allocated percentage (must total 100% across all primaries)

You can name beneficiaries when you apply, and update them anytime through the customer portal under **My Policies → Beneficiaries**.

## Per stirpes vs per capita
- **Per stirpes** — if a beneficiary predeceases you, their share passes to their children
- **Per capita** — surviving beneficiaries split the share equally

This matters when children or grandchildren are involved.

## Common mistakes
- **Naming a minor** without a custodian — courts must appoint a guardian, delaying the payout. Use a trust or UTMA account instead.
- **Naming "the estate"** — sends the benefit through probate, where it's exposed to creditors and delays.
- **Forgetting to update after major life events** — divorce, remarriage, birth of a child. In most states, beneficiary designations override your will.
- **Listing one person without a contingent** — if they predecease you, the benefit goes to your estate.
- **Not telling them** — beneficiaries who don't know they're named can take months or years to claim.

## When to update
Review your beneficiaries every 1-2 years and after:
- Marriage, divorce, or domestic partnership change
- Birth or adoption of a child
- Death of a previously named beneficiary
- Major change in financial or family circumstances`,
  },

  // ============================ TRAVEL ============================
  {
    slug: "lost-luggage-coverage",
    title: "Lost luggage coverage",
    category: "travel",
    summary:
      "How travel insurance covers lost, delayed, or damaged luggage and how to file a claim.",
    body: `# Am I covered if my luggage is lost during travel?

Most travel insurance plans cover **baggage loss, delay, and damage** — but only after airline or transport carrier liability is exhausted.

## What's covered
- **Lost** — luggage permanently missing after the airline declares it lost (typically 21-30 days)
- **Delayed** — luggage arriving late; covers essential purchases (clothing, toiletries) after a delay threshold (usually 6-24 hours)
- **Damaged** — broken, torn, or contaminated luggage and contents

## Coverage limits
Typical limits per trip:
- $1,500-$3,000 for total baggage loss
- $200-$500 for delayed baggage essentials
- $500-$1,500 per item for high-value items (jewelry, electronics, cameras)

Items above per-item limits may require a "scheduled item" rider or a homeowners floater for full coverage.

## What's NOT covered
- Cash, securities, tickets, and important documents
- Items left unattended in public areas
- Wear and tear or scratches that don't affect function
- Items confiscated by customs
- Pre-existing damage

## How to file
1. **Report immediately to the carrier** — at the airport baggage office. Get a written report with a reference number.
2. **Keep all receipts** — boarding passes, baggage claim ticket, replacement purchase receipts during a delay.
3. **Wait for carrier resolution** — your travel insurance is secondary, so claim with the airline first. They typically pay $1,500-$3,800 for international flights (Montreal Convention) and varying amounts domestically.
4. **File your travel insurance claim** within 30 days of trip end, attaching the carrier's settlement letter.

## Tips
- Photograph valuable items before packing
- Keep prescriptions, electronics, and a change of clothes in carry-on
- Save credit card receipts for valuable items — many cards include secondary baggage coverage`,
  },

  {
    slug: "trip-cancellation-coverage",
    title: "Trip cancellation coverage",
    category: "travel",
    summary:
      "When trip cancellation insurance pays out, what's excluded, and the difference between standard and cancel-for-any-reason coverage.",
    body: `# Trip cancellation coverage

Trip cancellation pays back your **prepaid, non-refundable** trip costs if you have to cancel for a covered reason before departure.

## Standard covered reasons
- Sudden illness, injury, or death of the traveler, a family member, or travel companion
- Severe weather forcing cancellation of the trip
- Jury duty or subpoena
- Job loss (after 1+ year at the same employer, in most plans)
- Terrorist event at your destination within 30 days of trip
- Bankruptcy or default of the airline/cruise line
- Natural disaster making destination uninhabitable

## Documentation required
- **Medical** — physician's letter confirming the inability to travel
- **Death of family** — death certificate and proof of relationship
- **Weather** — official cancellation/delay notice from the carrier
- **Job loss** — termination letter and HR confirmation

## What's NOT covered (under standard plans)
- Changing your mind or fear of travel
- Pre-existing conditions (unless waived — see below)
- Pregnancy (unless complications)
- Self-inflicted injuries or alcohol-related incidents
- Acts of war or government travel bans

## Pre-existing condition waiver
If you buy your policy within 14-21 days of your first trip deposit, most insurers waive pre-existing condition exclusions. This matters if you or a family member has a chronic condition that flares up.

## Cancel For Any Reason (CFAR)
An optional upgrade (typically 40-50% more premium) that lets you cancel for **any** reason — but pays back only **50-75%** of trip costs and must be invoked at least 48 hours before departure.

## How to file
1. Cancel the trip with each provider (airline, hotel, tour operator) and request refund/credit
2. Gather documentation supporting the covered reason
3. File the claim within 30 days of cancellation with itemized receipts and proof of non-refundable amounts
4. Settlement typically arrives 14-30 days after full documentation

## Tips
- Buy coverage **soon after booking** to maximize covered windows
- Read the covered-reasons list carefully — it varies by plan
- For high-value or complex trips, CFAR is often worth the upgrade`,
  },

  // ============================ HOME ============================
  {
    slug: "flood-vs-water-damage",
    title: "Flood vs water damage coverage",
    category: "home",
    summary:
      "The critical difference between flood insurance and standard water damage coverage on a homeowners policy.",
    body: `# Flood vs water damage coverage

This is one of the most common — and expensive — misunderstandings in home insurance: **flood** and **water damage** are covered by different policies.

## Standard homeowners covers
**Sudden, internal water damage** from:
- Burst pipes
- Failed appliances (washing machine, water heater, dishwasher)
- Roof leaks from a wind-blown shingle
- Accidental overflow from sinks or tubs
- Water main breaks under or into the home

These are typically covered up to your dwelling limit, after deductible.

## Standard homeowners does NOT cover
- **Surface flooding** from rain, hurricane, river, lake, or ocean
- **Sewer backup** through floor drains (unless you've added a sewer/drain rider)
- **Sump pump failure** during a power outage (rider needed)
- **Gradual leaks** that develop over weeks or months (considered maintenance)
- **Foundation seepage** from groundwater

## Flood insurance
A separate policy through the **National Flood Insurance Program (NFIP)** or a private flood insurer:
- Covers external water entering your home from rain, runoff, river overflow, or storm surge
- Typical limits: up to $250,000 dwelling and $100,000 contents
- 30-day waiting period before coverage begins (unless you're closing on a mortgage)
- Cost depends on flood zone — high-risk zones can be $1,500+/year, low-risk zones often $300-$500/year

## Sewer backup rider
- Add to your homeowners policy for $50-$100/year
- Covers backups from sewer or drain lines
- Limits typically $5,000-$25,000

## Decision guide
- **Anywhere with rain** — consider flood insurance, even if you're not in a designated flood zone (over 25% of NFIP claims come from outside high-risk zones)
- **Basement or below-grade living space** — almost always add a sewer backup rider
- **Recent construction in a developed watershed** — runoff patterns may differ from FEMA maps; check local floodplain history

## After damage occurs
- Document everything before cleanup, then mitigate to prevent further loss
- Save receipts for emergency mitigation — these are usually reimbursable
- File separate claims with each policy if both apply (rare but possible)`,
  },

  {
    slug: "valuables-and-personal-property",
    title: "Valuables and personal property coverage",
    category: "home",
    summary:
      "How standard personal property coverage works, sub-limits on valuables, and when to schedule items for full coverage.",
    body: `# Valuables and personal property coverage

Your homeowners or renters policy covers your belongings — but expensive items often have sub-limits that surprise people at claim time.

## Standard personal property coverage
Most homeowners policies cover personal property at **50-70% of the dwelling limit**. So a $400,000 dwelling typically includes $200,000-$280,000 of contents coverage.

Coverage applies whether items are at home or temporarily elsewhere (hotel, car, college dorm).

## Replacement cost vs actual cash value
- **Actual cash value (ACV)** — pays depreciated value (a 10-year-old TV gets ~10% of its original price)
- **Replacement cost (RC)** — pays the cost of a new equivalent item, no depreciation

Replacement cost is worth the small premium increase for most households.

## Sub-limits to know
Even with high overall personal property coverage, specific categories have low sub-limits:

| Category | Typical sub-limit |
|---|---|
| Cash and currency | $200 |
| Jewelry, watches, gems (theft) | $1,500 |
| Firearms (theft) | $2,500 |
| Silverware, goldware (theft) | $2,500 |
| Business property at home | $2,500 |
| Trading cards, coins, stamps | $1,000-$2,500 |

## Scheduling items
For valuables exceeding sub-limits, **schedule** them on a personal articles floater. Scheduled items typically have:
- No deductible
- Worldwide coverage including mysterious disappearance
- Coverage for any cause of loss (not limited to named perils)

You'll need an appraisal (within the last 1-3 years) and itemized receipts.

## Documenting belongings
Create a home inventory:
- Walk through each room with your phone, recording video
- Photograph serial numbers and receipts of high-value items
- Save the inventory in cloud storage, not just on a device that could be destroyed

After a loss, the inventory speeds settlement dramatically — adjusters typically settle scheduled items in days, while unscheduled property can take weeks of back-and-forth.

## Annual review
Review and update the inventory yearly:
- Add new electronics, appliances, jewelry purchases
- Update appraisals for items where value has shifted (gold, art)
- Adjust the personal property limit if it no longer matches your possessions`,
  },
];

// ----------------------------- write files -----------------------------

mkdirSync(OUT_DIR, { recursive: true });

let written = 0;
for (const a of articles) {
  const md = [
    "---",
    `title: ${JSON.stringify(a.title)}`,
    `slug: ${a.slug}`,
    `category: ${a.category}`,
    `summary: ${JSON.stringify(a.summary)}`,
    `updated: "${UPDATED}"`,
    "---",
    "",
    a.body,
    "",
  ].join("\n");
  writeFileSync(join(OUT_DIR, `${a.slug}.md`), md);
  written++;
}

console.log(`Wrote ${written} articles to ${OUT_DIR}/`);
