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

const AXAButtonReact = withReact(AXAButton);
const AXAFooterReact = withReact(AXAFooter);
const AXAFooterMainReact = withReact(AXAFooterMain);
const AXAFooterLinksReact = withReact(AXAFooterLinks);
const AXAFooterSubReact = withReact(AXAFooterSub);
const AXAFooterLegalsReact = withReact(AXAFooterLegals);

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
  onNowShowing,
}) => {
  const activeTodoWord = pluralize(count, 'item');
  const isActive = item => ({
    ...item,
    isActive: item.state === nowShowing,
  });
  const hasLinks = count || completedCount;
  const hasCompleted = completedCount > 0;

  return (
    <AXAFooterReact>
      {hasLinks ?
        <AXAFooterMainReact>
          <AXAFooterLinksReact title={title} items={items.map(isActive)} onAxaClick={onNowShowing}/>
        </AXAFooterMainReact>
      : null}

      <AXAFooterSubReact>
        <AXAFooterLegalsReact>
          <span className="m-todo-footer__help">
            Double-click to edit a todo
          </span>

          {hasLinks ?
            <span className={classnames('m-todo-footer__count', { 'm-todo-footer__count--completed': hasCompleted })}>
              <strong>{count}</strong> {activeTodoWord} left
            </span>
          : null }

          {hasCompleted &&
            <AXAButtonReact onAxaClick={onClearCompleted} color="white" size="sm" motion arrow ghost>Clear Completed</AXAButtonReact>
          }
        </AXAFooterLegalsReact>
      </AXAFooterSubReact>
    </AXAFooterReact>
  );
};

export default TodoFooter;
