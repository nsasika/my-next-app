'use client';

import { useMemo, useState } from 'react';
import LearningExamplePage from '@/components/learning/LearningExamplePage';
import ReduxBanner from '@/components/learning/ReduxBanner';
import AppButton from '@/components/ui/AppButton';
import ContentCard from '@/components/ui/ContentCard';
import { learningContent } from '@/content/learning';
import { showBanner } from '@/lib/features/ui/uiSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

type SortOrder = 'asc' | 'desc';

type Transaction = {
  account: string;
  amount: number;
  channel: string;
  id: string;
  merchant: string;
  reference: string;
};

type FilterResult = {
  durationMs: number;
  transactions: Transaction[];
};

const transactionMerchants = [
  'Aurora Bank Salary Credit',
  'ATM Withdrawal',
  'Home Loan Payment',
  'Card Settlement',
  'Merchant Transfer',
  'Insurance Premium',
  'Utility Bill',
  'Fixed Deposit',
] as const;

const transactionChannels = [
  'Mobile Banking',
  'Branch',
  'Card',
  'ATM',
  'Internet Banking',
] as const;

const transactions = Array.from({ length: 10000 }, (_, index) => {
  const merchant = transactionMerchants[index % transactionMerchants.length];
  const channel = transactionChannels[index % transactionChannels.length];
  const amount = ((index * 37) % 9500) + 50;

  return {
    account: `AUR-${String((index % 900) + 100).padStart(3, '0')}`,
    amount,
    channel,
    id: `TXN-${String(index + 1).padStart(5, '0')}`,
    merchant,
    reference: `${merchant} ${channel} ${amount}`,
  };
});

function filterTransactions(
  searchText: string,
  sortOrder: SortOrder,
): FilterResult {
  const start = performance.now();
  const normalizedSearch = searchText.trim().toLowerCase();

  const filtered = transactions
    .filter((transaction) => {
      if (!normalizedSearch) {
        return true;
      }

      return [
        transaction.account,
        transaction.channel,
        transaction.id,
        transaction.merchant,
        transaction.reference,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedSearch);
    })
    .sort((left, right) =>
      sortOrder === 'asc'
        ? left.amount - right.amount
        : right.amount - left.amount,
    );

  return {
    durationMs: performance.now() - start,
    transactions: filtered,
  };
}

export default function UseMemoTest() {
  const dispatch = useAppDispatch();
  const bannerVisible = Boolean(useAppSelector((state) => state.ui.banner));
  const demoContent = learningContent.useMemo.demo;
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [useMemoEnabled, setUseMemoEnabled] = useState(true);
  const [filterInputChanges, setFilterInputChanges] = useState(0);
  const [unrelatedRenders, setUnrelatedRenders] = useState(0);

  const withoutMemoResult = filterTransactions(searchText, sortOrder);
  const memoResult = useMemo(
    () => filterTransactions(searchText, sortOrder),
    [searchText, sortOrder],
  );

  const activeResult = useMemoEnabled ? memoResult : withoutMemoResult;
  const withoutMemoRuns = 1 + filterInputChanges + unrelatedRenders;
  const withMemoRuns = 1 + filterInputChanges;

  const updateSearchText = (value: string) => {
    setSearchText(value);
    setFilterInputChanges((current) => current + 1);
  };

  const updateSortOrder = (value: SortOrder) => {
    setSortOrder(value);
    setFilterInputChanges((current) => current + 1);
  };

  const triggerUnrelatedRender = (action: () => void) => {
    action();
    setUnrelatedRenders((current) => current + 1);
    dispatch(
      showBanner(
        useMemoEnabled
          ? learningContent.useMemo.banners.memoEnabled
          : learningContent.useMemo.banners.memoDisabled,
      ),
    );
  };

  return (
    <LearningExamplePage
      codeFilePath="src/app/(learning)/use-memo/page.tsx"
      header={learningContent.useMemo.header}
      theory={learningContent.useMemo.theory}
    >
      <ContentCard
        className={`max-w-5xl ${
          darkMode ? 'border-slate-700 bg-slate-900 text-white' : ''
        }`}
      >
        <div className="mb-5">
          <ReduxBanner />
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_220px_220px]">
          <label className="grid gap-2 text-sm font-bold">
            {demoContent.searchLabel}
            <input
              value={searchText}
              disabled={bannerVisible}
              onChange={(event) => updateSearchText(event.target.value)}
              placeholder={demoContent.searchPlaceholder}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold">
            {demoContent.sortLabel}
            <select
              value={sortOrder}
              disabled={bannerVisible}
              onChange={(event) =>
                updateSortOrder(event.target.value as SortOrder)
              }
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              <option value="asc">{demoContent.sortAscendingLabel}</option>
              <option value="desc">{demoContent.sortDescendingLabel}</option>
            </select>
          </label>

          <div className="grid gap-2 text-sm font-bold">
            {demoContent.useMemoToggleLabel}
            <button
              type="button"
              disabled={bannerVisible}
              onClick={() => setUseMemoEnabled((enabled) => !enabled)}
              className={`rounded-lg px-4 py-3 text-sm font-black transition ${
                bannerVisible
                  ? 'cursor-not-allowed bg-slate-100 text-slate-400'
                  : useMemoEnabled
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-800'
              }`}
            >
              {useMemoEnabled
                ? demoContent.enabledLabel
                : demoContent.disabledLabel}
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <AppButton
            disabled={bannerVisible}
            onClick={() =>
              triggerUnrelatedRender(() => setCounter((value) => value + 1))
            }
          >
            {demoContent.counterLabel}: {counter} +
          </AppButton>
          <AppButton
            disabled={bannerVisible}
            onClick={() =>
              triggerUnrelatedRender(() =>
                setDarkMode((currentMode) => !currentMode),
              )
            }
            variant="secondary"
          >
            {demoContent.themeToggleLabel}
          </AppButton>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: demoContent.totalTransactionsLabel,
              value: transactions.length.toLocaleString(),
            },
            {
              label: demoContent.filteredTransactionsLabel,
              value: activeResult.transactions.length.toLocaleString(),
            },
            {
              label: demoContent.filterRunsLabel,
              value: useMemoEnabled ? withMemoRuns : withoutMemoRuns,
            },
            {
              label: demoContent.calculationTimeLabel,
              value: `${activeResult.durationMs.toFixed(2)}ms`,
            },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-slate-200 bg-white p-4 text-slate-950"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-black">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {[
            {
              description: demoContent.normalCalculationDescription,
              runs: withoutMemoRuns,
              time: withoutMemoResult.durationMs,
              title: demoContent.withoutMemoTitle,
            },
            {
              description: demoContent.memoCalculationDescription,
              runs: withMemoRuns,
              time: memoResult.durationMs,
              title: demoContent.withMemoTitle,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-5 text-slate-950"
            >
              <h2 className="text-xl font-black">{item.title}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {demoContent.filterRunsLabel}
                  </p>
                  <p className="mt-1 text-2xl font-black">{item.runs}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    {demoContent.calculationTimeLabel}
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {item.time.toFixed(2)}ms
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4 text-slate-950">
          <h2 className="text-base font-bold">
            {demoContent.transactionListTitle}
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.14em] text-slate-500">
                <tr>
                  <th className="py-2 pr-4">{demoContent.tableHeaders.id}</th>
                  <th className="py-2 pr-4">
                    {demoContent.tableHeaders.merchant}
                  </th>
                  <th className="py-2 pr-4">
                    {demoContent.tableHeaders.channel}
                  </th>
                  <th className="py-2 pr-4">
                    {demoContent.tableHeaders.account}
                  </th>
                  <th className="py-2 text-right">
                    {demoContent.tableHeaders.amount}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {activeResult.transactions.slice(0, 8).map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-2 pr-4 font-semibold">
                      {transaction.id}
                    </td>
                    <td className="py-2 pr-4">{transaction.merchant}</td>
                    <td className="py-2 pr-4">{transaction.channel}</td>
                    <td className="py-2 pr-4">{transaction.account}</td>
                    <td className="py-2 text-right font-bold">
                      ${transaction.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentCard>
    </LearningExamplePage>
  );
}
