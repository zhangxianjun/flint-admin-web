import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import WorkTable from './components/WorkTable';

const { Cell } = ResponsiveGrid;

const TodayTask = () => {
  return (
    <ResponsiveGrid gap={0}>
      <Cell colSpan={12}>
        <PageHeader
          breadcrumbs={[
            {
              name: '首页',
            },
            {
              name: '今日任务',
            },
          ]}
        />
      </Cell>

      <Cell colSpan={12}>
        <WorkTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default TodayTask;
