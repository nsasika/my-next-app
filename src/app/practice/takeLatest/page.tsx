'use client';

import Link from 'next/link';

const TakeLatestPage = () => {
  return (
    <div style={{ padding: '16px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1>Redux Saga - <strong>takeLatest</strong> Example</h1>
      <p>
        This page demonstrates the use of Redux Saga's <strong>takeLatest</strong> effect.
      </p>
      <p>
        The <strong>takeLatest</strong> effect ensures that only the <strong>latest dispatched action</strong> is processed, 
        canceling any ongoing work from previous actions. This is especially useful for scenarios like search or API calls 
        where only the latest result matters.
      </p>
      <p>
        For example, in a counter-like scenario, if you dispatch multiple actions rapidly, <strong>takeLatest</strong> will 
        ensure that only the last action is processed.
      </p>
      <p>
        Open the console to see saga logs when actions are dispatched. You can compare this behavior with <strong>takeEvery</strong>, 
        which processes every action without cancellation.
      </p>
      <p>
        To learn more about Redux Toolkit and how it handles state management, check out the 
        <Link href="/redux-saga" style={{ color: '#007BFF', textDecoration: 'underline' }}>
          {" "}Take Latest Saga Example
        </Link>.
      </p>
    </div>
  );
};

export default TakeLatestPage;