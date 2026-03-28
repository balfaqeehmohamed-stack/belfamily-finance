// ============================================================
// BELFAMILY FINANCE TRACKER — CONFIGURATION FILE
// ============================================================
//
// HOW TO UPDATE THIS FILE:
// ─────────────────────────────────────────────────────────
// 1. Open this file in any text editor (TextEdit, Notepad, VS Code)
// 2. Find the section you want to update (use the labels below)
// 3. Change the number after the colon  e.g.  salary: 38088.28  →  salary: 40000
// 4. Save the file
// 5. Refresh the app in your browser
//
// TIP: You can also update most values inside the app via the
//      ⚙ Settings tab — those changes are saved automatically.
//
// CURRENCY: All amounts are in AED unless noted.
// ============================================================

const FINANCE_CONFIG = {

  // ── VERSION (do not change — helps track updates) ────────
  version: "1.0.0",
  lastUpdated: "2026-03-22",   // Update this when you make changes — FAB EMI updated 8,241.92→8,301.07

  // ── FAMILY ───────────────────────────────────────────────
  family: {
    members: [
      { id: "mohamed", name: "Mohamed", emoji: "👨", color: "#00D4FF" },
      { id: "fatima",  name: "Fatima",  emoji: "👩", color: "#EC4899" }
    ],
    // App PIN (optional, 4 digits). Set to null to disable.
    pin: null
  },

  // ── INCOME ───────────────────────────────────────────────
  income: {
    monthlySalaryNet: 38088.28,   // ← Update when salary changes
    salaryDayOfMonth: 27          // Day salary lands each month
  },

  // ── CREDIT CARD ──────────────────────────────────────────
  creditCard: {
    // Update this each month after statement arrives
    currentBalance: 15000,        // ← After Mar 2026 bonus applied
    monthlyInterestRate: 0.0399,  // 3.99% / month = 47.9% p.a.
    // When you clear the CC, set currentBalance to 0
  },

  // ── FAB LOAN ─────────────────────────────────────────────
  fabLoan: {
    currentBalance: 385121.21,    // ← Update monthly with actual balance
    monthlyEMI: 8301.07,          // Fixed — updated Mar 2026
    interestComponent: 950.25,    // Approx — decreases as balance reduces
    principalComponent: 7350.82,  // Approx — increases as balance reduces
    insuranceMonthly: 69,         // FAB Finance Insurance (included in expenses)
  },

  // ── MANUAL PAYMENT ACTIONS ───────────────────────────────
  // These expenses need MANUAL action each month (not auto-deducted).
  // Displayed as a visual checklist on the Home page.
  manualActions: [
    { id: "ma_petrol",  name: "Petrol",            amount: 1000, method: "ADNOC Wallet",  icon: "⛽", color: "#DC2626", hint: "Transfer to ADNOC Wallet app" },
    { id: "ma_etis",    name: "Etisalat",           amount: 1000, method: "Etisalat App",  icon: "📱", color: "#7C3AED", hint: "Pay bill in Etisalat app" },
    { id: "ma_baby",    name: "Baby Saving",        amount: 1500, method: "Withdraw Cash", icon: "👶", color: "#EC4899", hint: "Withdraw & set aside for baby" },
    { id: "ma_maid",    name: "Maid Salary",        amount: 1200, method: "Withdraw Cash", icon: "🏠", color: "#0EA5E9", hint: "Withdraw cash for maid" },
    { id: "ma_darb",    name: "Mawaqif + Darb",     amount: 100,  method: "DARB App",      icon: "🚗", color: "#F59E0B", hint: "Top up via DARB app" },
    { id: "ma_food",    name: "Food & Groceries",   amount: 1400, method: "ADIB Account",  icon: "🛒", color: "#059669", hint: "Transfer to ADIB account" },
    { id: "ma_carins",  name: "Car Insurance Fund", amount: 800,  method: "Withdraw Cash", icon: "🛡️", color: "#6366F1", hint: "Withdraw & keep in envelope" },
  ],

  // ── FIXED MONTHLY EXPENSES ───────────────────────────────
  // Edit amounts in the "amount" field.
  // To pause an item, set paused: true (it will show grayed out).
  // To restore, set paused: false and update the amount.
  expenses: [
    // TRANSPORT
    { id: "car_loan",     name: "Car Loan — Pick-Up Car",       amount: 3223,   category: "Transport",     paused: false },
    { id: "petrol",       name: "Petrol",                        amount: 1000,   category: "Transport",     paused: false },
    { id: "mawaqif",      name: "Mawaqif + Darb",                amount: 100,    category: "Transport",     paused: false },
    // UTILITIES
    { id: "etisalat",     name: "Etisalat (Mobile + Internet)",  amount: 1000,   category: "Utilities",     paused: false },
    { id: "electricity",  name: "DEWA — Electricity & Water",    amount: 1500,   category: "Utilities",     paused: false },
    // FAMILY
    { id: "fatima_all",   name: "Fatima Allowance",              amount: 3000,   category: "Family",        paused: false },
    { id: "mom_all",      name: "Mom Allowance",                 amount: 0,      category: "Family",        paused: true,
      restoreAmount: 1500,  restoreDate: "2026-09-25",
      note: "PAUSED — restore to AED 1,500 on 25 Sep 2026 (after CC cleared)" },
    // SAVINGS
    { id: "baby_saving",  name: "Baby Saving",                   amount: 1500,   category: "Savings",       paused: false,
      restoreAmount: 2000,  restoreDate: "2027-01-27",
      note: "Reduced — restore to AED 2,000 on 27 Jan 2027" },
    { id: "travel_save",  name: "Travel Savings",                amount: 0,      category: "Savings",       paused: true,
      restoreAmount: 1000,  restoreDate: "2026-09-25",
      note: "PAUSED — restore to AED 1,000 after CC cleared (25 Sep 2026)" },
    // PERSONAL
    { id: "your_all",     name: "Your Allowance (Mohamed)",      amount: 1500,   category: "Personal",      paused: false,
      restoreAmount: 3000,  restoreDate: "2027-02-01",
      note: "Reduced — restore gradually after Jan 2027" },
    // STAFF
    { id: "maid",         name: "Maid Salary",                   amount: 1200,   category: "Staff",         paused: false },
    // DEBT
    { id: "govt_loan",    name: "Government Loan (Fixed 2 Yrs)", amount: 925,    category: "Debt",          paused: false },
    // SUBSCRIPTIONS
    { id: "claude",       name: "Claude AI",                     amount: 79.99,  category: "Subscriptions", paused: false },
    { id: "apple_music",  name: "Apple Music",                   amount: 39.99,  category: "Subscriptions", paused: false },
    { id: "youtube",      name: "YouTube Premium",               amount: 16.99,  category: "Subscriptions", paused: false },
    { id: "ms365",        name: "Microsoft 365",                 amount: 37,     category: "Subscriptions", paused: false },
    // INSURANCE / PROTECTION
    { id: "fab_ins",      name: "FAB Finance Insurance",         amount: 69,     category: "Insurance",     paused: false },
    // ESSENTIAL
    { id: "food",         name: "Food & Groceries",              amount: 1400,   category: "Essential",     paused: false,
      restoreAmount: 2000,  restoreDate: "2027-01-01",
      note: "Reduced from AED 2,000" },
    // BUFFER / ANNUAL
    { id: "car_ins_fund", name: "Car Insurance Fund (Monthly)",  amount: 800,    category: "Annual",        paused: false,
      note: "Pick-Up 5,795 + Wife 3,535 = 9,330/yr → 778/mo, rounded up" },
    { id: "maintenance",  name: "Maintenance Buffer",            amount: 0,      category: "Buffer",        paused: true,
      restoreAmount: 500,   restoreDate: "2027-01-27",
      note: "PAUSED — restore to AED 500 after 27 Jan 2027" },
  ],

  // ── TEMPORARY OBLIGATIONS ────────────────────────────────
  // These are time-limited payments NOT in fixed expenses.
  // They reduce your monthly surplus until their end date.
  tempObligations: [
    {
      id: "wife_loan",
      name: "Wife's Loan",
      amount: 4100,                // AED / month
      startDate: "2026-04-27",
      endDate: "2026-08-27",
      totalDue: 20500,
      note: "5 monthly payments of AED 4,100"
    },
    {
      id: "consultant",
      name: "Consultant Fees",
      amount: 4666.67,             // AED / month
      startDate: "2026-04-27",
      endDate: "2027-01-27",
      totalDue: 46666.70,
      note: "10 monthly payments of AED 4,666.67"
    },
    {
      id: "elevator_part1",
      name: "Elevator Part 1",
      amount: 6825,
      startDate: "2026-03-27",
      endDate: "2026-03-27",       // One-time payment
      totalDue: 6825,
      note: "One-time — paid from March salary. Leaves AED 5,630 carry-forward for April."
    },
    {
      id: "elevator_part2",
      name: "Elevator Part 2",
      amount: 6825,
      startDate: "2026-04-27",
      endDate: "2026-04-27",       // One-time payment
      totalDue: 6825,
      note: "One-time — covered by Mar carry-forward (AED 5,630) + April CC interest absorbed"
    },
    {
      id: "decor_engineer",
      name: "Decor Engineer (House)",
      amount: 10000,
      startDate: "2026-04-01",
      endDate: "2026-04-01",       // One-time payment
      totalDue: 10000,
      note: "One-time — fund from gold sale (33.55g portfolio)"
    }
  ],

  // ── PAYMENT SCHEDULE ─────────────────────────────────────
  // This is your complete monthly roadmap.
  // Amounts are pre-calculated from the Excel model.
  // You don't normally edit this — it's auto-calculated from above.
  // If you need to override a month's values, add overrides here.
  paymentSchedule: [
    { id:"m00", date:"2026-03-27", label:"Mar 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:6825,    surplus:5571.24,  ccPay:0,       fabExtra:0,       ccBal:15000,    fabBal:385121.21, phase:"Pre-Payment", note:"Salary arrives 27 Mar 2026. CC reduced to AED 15,000 via bonus. Elevator Part 1 (AED 6,825) paid from March salary — leaves AED 5,571 carry-forward to cover April gap. First CC/FAB extra payment starts Apr 27." },
    { id:"m01", date:"2026-04-27", label:"Apr 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:15591.67, surplus:-3195.43, ccPay:0,       fabExtra:0,       ccBal:15598.50, fabBal:377770.39, phase:"CC Priority",  note:"Elevator Part 2 (AED 6,825) + Wife Loan (4,100) + Consultant (4,667) — gap covered by Mar carry-forward. No CC payment this month." },
    { id:"m02", date:"2026-05-27", label:"May 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:8766.67,  surplus:3629.57,  ccPay:3629.57, fabExtra:0,       ccBal:12591.31, fabBal:370419.57, phase:"CC Priority",  note:"Wife Loan (4,100) + Consultant (4,667) active" },
    { id:"m03", date:"2026-06-26", label:"Jun 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:8766.67,  surplus:3629.57,  ccPay:3629.57, fabExtra:0,       ccBal:9464.13,  fabBal:363068.75, phase:"CC Priority",  note:"Wife Loan (4,100) + Consultant (4,667) active" },
    { id:"m04", date:"2026-07-27", label:"Jul 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:8766.67,  surplus:3629.57,  ccPay:3629.57, fabExtra:0,       ccBal:6212.18,  fabBal:355717.93, phase:"CC Priority",  note:"Wife Loan (4,100) + Consultant (4,667) active" },
    { id:"m05", date:"2026-08-27", label:"Aug 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:8766.67,  surplus:3629.57,  ccPay:3629.57, fabExtra:0,       ccBal:2830.48,  fabBal:348367.11, phase:"CC Priority",  note:"Wife Loan ends 27 Aug. CC almost clear." },
    { id:"m06", date:"2026-09-25", label:"Sep 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:4666.67,  surplus:7729.57,  ccPay:2943.41, fabExtra:4786.16, ccBal:0,        fabBal:336230.13, phase:"FAB Priority", milestone:"🎉 CC CLEARED!", note:"CC cleared! Final CC payment AED 2,943.41. Consultant (4,667) still active. Restore Travel Savings." },
    { id:"m07", date:"2026-10-27", label:"Oct 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:4666.67,  surplus:7729.57,  ccPay:0,       fabExtra:7729.57, ccBal:0,        fabBal:321149.74, phase:"FAB Priority", note:"Consultant (4,667) active" },
    { id:"m08", date:"2026-11-27", label:"Nov 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:4666.67,  surplus:7729.57,  ccPay:0,       fabExtra:7729.57, ccBal:0,        fabBal:306069.35, phase:"FAB Priority", note:"Consultant (4,667) active" },
    { id:"m09", date:"2026-12-25", label:"Dec 2026", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:4666.67,  surplus:7729.57,  ccPay:0,       fabExtra:7729.57, ccBal:0,        fabBal:290988.96, phase:"FAB Priority", note:"Consultant (4,667) active" },
    { id:"m10", date:"2027-01-27", label:"Jan 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:4666.67,  surplus:7729.57,  ccPay:0,       fabExtra:7729.57, ccBal:0,        fabBal:275908.57, phase:"FAB Priority", note:"Consultant FINAL payment. Full surplus to FAB from next month." },
    { id:"m11", date:"2027-02-26", label:"Feb 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:256161.51, phase:"FAB Priority", note:"All obligations cleared — full surplus to FAB 🚀" },
    { id:"m12", date:"2027-03-26", label:"Mar 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:236414.45, phase:"FAB Priority" },
    { id:"m13", date:"2027-04-27", label:"Apr 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:216667.39, phase:"FAB Priority" },
    { id:"m14", date:"2027-05-27", label:"May 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:196920.33, phase:"FAB Priority" },
    { id:"m15", date:"2027-06-25", label:"Jun 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:177173.27, phase:"FAB Priority" },
    { id:"m16", date:"2027-07-27", label:"Jul 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:157426.21, phase:"FAB Priority" },
    { id:"m17", date:"2027-08-27", label:"Aug 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:137679.15, phase:"FAB Priority" },
    { id:"m18", date:"2027-09-27", label:"Sep 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:117932.09, phase:"FAB Priority" },
    { id:"m19", date:"2027-10-27", label:"Oct 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:98185.03,  phase:"FAB Priority" },
    { id:"m20", date:"2027-11-26", label:"Nov 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:78437.97,  phase:"FAB Priority" },
    { id:"m21", date:"2027-12-27", label:"Dec 2027", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:58690.91,  phase:"FAB Priority" },
    { id:"m22", date:"2028-01-27", label:"Jan 2028", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:38943.85,  phase:"FAB Priority" },
    { id:"m23", date:"2028-02-25", label:"Feb 2028", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:19196.79,  phase:"FAB Priority" },
    { id:"m24", date:"2028-03-27", label:"Mar 2028", salary:38088.28, fixedExp:17390.97, fabEMI:8301.07, tempObl:0,        surplus:12396.24, ccPay:0,       fabExtra:12396.24,ccBal:0,        fabBal:0,         phase:"DEBT FREE",   milestone:"🏆 DEBT FREE!" },
  ],

  // ── MILESTONES ───────────────────────────────────────────
  milestones: [
    { date: "2026-09-25", title: "CC Cleared!",   icon: "🎉", detail: "Credit Card fully paid off! Save AED 598/month in interest.", type: "success"  },
    { date: "2026-09-25", title: "Mom Allowance", icon: "👩‍👧", detail: "Restore Mom Allowance to AED 1,500/month",                   type: "restore"  },
    { date: "2027-01-27", title: "Consultant Done!",icon:"✅",  detail: "Final consultant payment. Extra AED 4,667 freed up.",       type: "success"  },
    { date: "2027-02-01", title: "Budget Boost",  icon: "🚀", detail: "Full AED 12,455 surplus now goes to FAB every month.",       type: "milestone"},
    { date: "2028-03-27", title: "DEBT FREE! 🏆", icon: "💎", detail: "FAB Loan fully closed. You now have AED 20,697/month free!", type: "legendary"},
  ],

  // ── PAUSED ITEMS ─────────────────────────────────────────
  // These items are currently paused to maximise debt repayment.
  // Restore them on the dates below.
  pausedItems: [
    { item: "Travel Savings",   from: 0,    to: 1000, restoreDate: "2026-09-25", action: "After CC cleared" },
    { item: "Mom Allowance",    from: 0,    to: 1500, restoreDate: "2026-09-25", action: "Update Expenses" },
    { item: "Baby Saving",      from: 1500, to: 2000, restoreDate: "2027-01-27", action: "Increase savings" },
    { item: "Maintenance Buffer",from:0,    to: 500,  restoreDate: "2027-01-27", action: "After all obligations clear" },
    { item: "Your Allowance",   from: 1500, to: 3000, restoreDate: "2027-02-01", action: "Gradually after Jan 2027" },
    { item: "Food & Groceries", from: 1400, to: 2000, restoreDate: "2027-01-01", action: "After all obligations clear" },
  ],

  // ── POST-DEBT PLAN ───────────────────────────────────────
  // What to do with AED 20,697/month after FAB is cleared (Mar 2028+)
  postDebtPlan: {
    totalMonthlyFree: 20697.31,
    suggestions: [
      { label: "Emergency Fund",     amount: 5000,  icon: "🛡️",  desc: "6-month emergency buffer" },
      { label: "Investment / Index", amount: 8000,  icon: "📈",  desc: "Long-term wealth building" },
      { label: "Family Goals",       amount: 4000,  icon: "🏡",  desc: "House, travel, education" },
      { label: "Lifestyle Upgrade",  amount: 3697,  icon: "✨",  desc: "Rewards for the discipline" },
    ]
  },

  // ── APP SETTINGS ─────────────────────────────────────────
  app: {
    currency: "AED",
    timezone: "Asia/Dubai",
    googleCalendarId: "balfaqeehmohamed@gmail.com"
  }
};
