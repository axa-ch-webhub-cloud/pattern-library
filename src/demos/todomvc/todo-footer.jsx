import React from 'react';
import classnames from 'classnames';
import withReact from '../../js/with-react';
import { pluralize, ALL_TODOS, ACTIVE_TODOS, COMPLETED_TODOS } from './utils';
import AXAButton from '../../components/m-button';
import AXAFooter from '../../components/o-footer';
import AXAFooterMain from '../../components/m-footer-main';
import AXAFooterLinks from '../../components/m-footer-links';
import AXAFooterSub from '../../components/m-footer-sub';
import AXAFooterLegals from '../../components/m-footer-legals';

const withReactBound = withReact(React);

const AXAButtonReact = withReactBound(AXAButton);
const AXAFooterReact = withReactBound(AXAFooter);
const AXAFooterMainReact = withReactBound(AXAFooterMain);
const AXAFooterLinksReact = withReactBound(AXAFooterLinks);
const AXAFooterSubReact = withReactBound(AXAFooterSub);
const AXAFooterLegalsReact = withReactBound(AXAFooterLegals);

const footerItems = [
  { name: 'All', url: '#', state: ALL_TODOS },
  { name: 'Active', url: '#active', state: ACTIVE_TODOS },
  { name: 'Completed', url: '#completed', state: COMPLETED_TODOS },
];

const TodoFooter = ({
  title = 'Visible Todos',
  items = footerItems,
  count,
  completedCount,
  onClearCompleted,
  nowShowing,
}) => {
  const activeTodoWord = pluralize(count, 'item');
  const selected = item => ({
    ...item,
    selected: item.state === nowShowing,
  });
  const hasCompleted = completedCount > 0;

  return (
    <AXAFooterReact>
      <AXAFooterMainReact>
        <AXAFooterLinksReact title={title} items={items.map(selected)} onAxaclick={(event) => {
          event.preventDefault();
          console.log(`footer link ${event.type}`);
        }} />
      </AXAFooterMainReact>

      <AXAFooterSubReact>
        <AXAFooterLegalsReact>
          <span className={classnames('m-todo-footer__count', { 'm-todo-footer__count--completed': hasCompleted })}>
            <strong>{count}</strong> {activeTodoWord} left
          </span>

          {hasCompleted &&
            <AXAButtonReact onAxaclick={onClearCompleted} color="white" size="sm" motion arrow ghost>Clear Completed</AXAButtonReact>
          }
        </AXAFooterLegalsReact>
      </AXAFooterSubReact>
    </AXAFooterReact>
  );
};

export default TodoFooter;
