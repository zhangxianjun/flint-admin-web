import React, { useState, useEffect } from 'react';
import { Box, Search, Card, Tag, ResponsiveGrid, Divider, Typography, Icon, Loading } from '@alifd/next';
import styles from './index.module.scss';

const { Group: TagGroup, Selectable: SelectableTag } = Tag;
const { Cell } = ResponsiveGrid;
const DEFAULT_DATA = {
  // tagsA: ['类目一', '类目二', '类目三', '类目四', '类目五', '类目六', '类目七', '类目八', '类目九', '类目十'],
  // tagA: '类目一',
  // tagsB: ['不到一年', '一年以上三年以下', '三年以上五年以下', '五年以上'],
  // tagB: '一年以上三年以下',
  cards: new Array(7).fill({
    title: 'CashCow管理后台',
    content: 'CashCow管理后台',
    link: ['测试', '预发', '正式'],
  }),
};

const CardList = (props) => {
  const { dataSource = DEFAULT_DATA, onSearch = () => {} } = props;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  });

  const renderCards = () => {
    return dataSource.cards.map((c, i) => (
      <Cell colSpan={3} className={styles.ListItem} key={i}>
        <div className={styles.main}>
          {/* <img src="https://shadow.elemecdn.com/app/element/list.76b098b1-1732-11ea-948d-7d2ddf6d1c39.png" alt="img" /> */}
          <div className={styles.content}>
            <div className={styles.title}>{c.title}</div>
            <div className={styles.info}>{c.content}</div>
            <div className={styles.link}>
              <a href="#">{c.link[0]}</a>
              <a href="#">{c.link[1]}</a>
              <a href="#">{c.link[2]}</a>
            </div>
          </div>
        </div>
      </Cell>
    ));
  };

  return (
    <>
      <Loading
        visible={loading}
        style={{
          display: 'block',
        }}
      >
        <ResponsiveGrid gap={20}>
          {renderCards()}
        </ResponsiveGrid>
      </Loading>
    </>
  );
};

export default CardList;
