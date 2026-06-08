'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import type { RoutesType } from '@/config/routes.type';

const CollapsibleSection = ({ title, links }: RoutesType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <h3
        className="text-lg font-semibold mb-2 cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? '▼' : '▶'} {/* Arrow indicator */}
      </h3>
      {isOpen && (
        <ul className="space-y-1 pl-4">
          {links?.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default React.memo(CollapsibleSection);
