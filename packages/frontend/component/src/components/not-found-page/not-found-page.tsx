import { useAFFiNEI18N } from '@affine/i18n/hooks';
import { SignOutIcon } from '@blocksuite/icons';

import { Avatar } from '../../ui/avatar';
import { Button, IconButton } from '../../ui/button';
import { Tooltip } from '../../ui/tooltip';
import { AffineOtherPageLayout } from '../affine-other-page-layout';
import type { User } from '../auth-components';
import { NotFoundPattern } from './not-found-pattern';
import {
  largeButtonEffect,
  notFoundPageContainer,
  wrapper,
} from './styles.css';

export interface NotFoundPageProps {
  user?: User | null;
  signInComponent?: JSX.Element;
  onBack: () => void;
  onSignOut: () => void;
}
export const NoPermissionOrNotFound = ({
  user,
  onBack,
  onSignOut,
  signInComponent,
}: NotFoundPageProps) => {
  const t = useAFFiNEI18N();

  return (
    <AffineOtherPageLayout>
      <div className={notFoundPageContainer} data-testid="not-found">
        <div>
          {user ? (
            <>
              <div className={wrapper}>
                <NotFoundPattern />
              </div>
              <p className={wrapper}>{t['404.hint']()}</p>
              <div className={wrapper}>
                <Button
                  type="primary"
                  size="extraLarge"
                  onClick={onBack}
                  className={largeButtonEffect}
                >
                  {t['404.back']()}
                </Button>
              </div>
              <div className={wrapper}>
                <Avatar url={user.avatarUrl ?? user.image} name={user.name} />
                <span style={{ margin: '0 12px' }}>{user.email}</span>
                <Tooltip content={t['404.signOut']()}>
                  <IconButton onClick={onSignOut}>
                    <SignOutIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </>
          ) : (
            signInComponent
          )}
        </div>
      </div>
    </AffineOtherPageLayout>
  );
};

export const NotFoundPage = ({
  user,
  onBack,
  onSignOut,
}: NotFoundPageProps) => {
  const t = useAFFiNEI18N();

  return (
    <AffineOtherPageLayout>
      <div className={notFoundPageContainer} data-testid="not-found">
        <div>
          <div className={wrapper}>
            <NotFoundPattern />
          </div>
          <p className={wrapper}>{t['404.hint']()}</p>
          <div className={wrapper}>
            <Button
              type="primary"
              size="extraLarge"
              onClick={onBack}
              className={largeButtonEffect}
            >
              {t['404.back']()}
            </Button>
          </div>

          {user ? (
            <div className={wrapper}>
              <Avatar url={user.avatarUrl ?? user.image} name={user.name} />
              <span style={{ margin: '0 12px' }}>{user.email}</span>
              <Tooltip content={t['404.signOut']()}>
                <IconButton onClick={onSignOut}>
                  <SignOutIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : null}
        </div>
      </div>
    </AffineOtherPageLayout>
  );
};
