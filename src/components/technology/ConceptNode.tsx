import React from 'react';

interface ConceptNodeProps {
  id: string;
  title: string;
  subtitle: string;
  positionClass: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function ConceptNode({
  id,
  title,
  subtitle,
  positionClass,
  isActive = false,
  onClick,
}: ConceptNodeProps) {
  const activeClass = isActive ? ' active' : '';
  return (
    <div
      className={'concept-node ' + positionClass + activeClass}
      data-node={id}
      onClick={onClick}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <span className='c-node-dot' />
      <span className='c-node-title'>{title}</span>
      <span className='c-node-sub'>{subtitle}</span>
    </div>
  );
}
