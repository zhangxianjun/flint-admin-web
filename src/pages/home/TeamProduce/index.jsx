import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import CardList from './components/CardList';

const { Cell } = ResponsiveGrid;

const TeamProduce = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="团队成果"
          breadcrumbs={[
            {
              name: '首页',
            },
            {
              name: '团队成果',
            },
          ]}
        />
      </Cell>

      <Cell colSpan={12}>
        <CardList />
      </Cell>
    </ResponsiveGrid>
  );
};

export default TeamProduce;
