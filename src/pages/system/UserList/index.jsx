import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import DialogTable from './components/DialogTable';

const { Cell } = ResponsiveGrid;

const UserList = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="用户列表"
          breadcrumbs={[
            {
              name: '系统',
            },
            {
              name: '用户列表',
            }
          ]}
          description="弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格弹窗表格"
        />
      </Cell>

      <Cell colSpan={12}>
        <DialogTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default UserList;
