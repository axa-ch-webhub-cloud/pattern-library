import React from 'react';
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
  { name: 'completed', url: '#completed', state: COMPLETED_TODOS },
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

  return (
    <AXAFooterReact>
      <AXAFooterMainReact>
        <AXAFooterLinksReact title={title} items={items.map(selected)} />
      </AXAFooterMainReact>

      <AXAFooterSubReact>
        <AXAFooterLegalsReact>
          <span className="todo-count">
            <strong>{count}</strong> {activeTodoWord} left
          </span>

          {completedCount > 0 &&
            <AXAButtonReact onClick={onClearCompleted}>Clear Completed</AXAButtonReact>
          }
        </AXAFooterLegalsReact>
      </AXAFooterSubReact>
    </AXAFooterReact>
  );
};

export default TodoFooter;
