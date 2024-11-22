// components/auth/PrivateRoutesContainer.tsx
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "@xstate/react";
import MainLayout from "./MainLayout";
import RequireAuth from "./RequireAuth";
import BankAccountsContainer from "@/components/bank-account/BankAccountsContainer";
import NotificationsContainer from "@/components/notification/NotificationsContainer";
import TransactionCreateContainer from "@/components/transaction/create/TransactionCreateContainer";
import TransactionDetailContainer from "@/components/transaction/detail/TransactionDetailContainer";
import TransactionsContainer from "@/components/transaction/list/TransactionsContainer";
import UserOnboardingContainer from "@/components/user/UserOnboardingContainer";
import UserSettingsContainer from "@/components/user/UserSettingsContainer";
import type { AuthActorRef } from "@/machines/authMachine";
import type { BankAccountsActorRef } from "@/machines/bankAccountsMachine";
import type { NotificationsActorRef } from "@/machines/notificationsMachine";
import type { SnackbarActorRef } from "@/machines/snackbarMachine";

export interface PrivateRoutesContainerProps {
  isLoggedIn: boolean;
  authActor: AuthActorRef;
  bankAccountsActor: BankAccountsActorRef;
  notificationsActor: NotificationsActorRef;
  snackbarActor: SnackbarActorRef;
}

export default function PrivateRoutesContainer({
  isLoggedIn,
  authActor,
  bankAccountsActor,
  notificationsActor,
  snackbarActor,
}: PrivateRoutesContainerProps) {
  const authState = useSelector(authActor, snapshot => snapshot);
  const notificationsState = useSelector(
    notificationsActor,
    snapshot => snapshot
  );
  useEffect(() => {
    notificationsActor.send({ type: "FETCH", userId: "" });
  });

  return (
    <MainLayout notificationsState={notificationsState} authActor={authActor}>
      <UserOnboardingContainer
        authActor={authActor}
        bankAccountsActor={bankAccountsActor}
      />
      <Routes>
        <Route
          path="/(public|contacts|personal)?"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <TransactionsContainer />
            </RequireAuth>
          }
        />
        <Route
          path="/user/settings"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <UserSettingsContainer authActor={authActor} />
            </RequireAuth>
          }
        />
        <Route
          path="/notifications"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <NotificationsContainer
                authState={authState}
                notificationsActor={notificationsActor}
              />
            </RequireAuth>
          }
        />
        <Route
          path="/bankaccounts*"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <BankAccountsContainer
                authState={authState}
                bankAccountsActor={bankAccountsActor}
              />
            </RequireAuth>
          }
        />
        <Route
          path="/transaction/new"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <TransactionCreateContainer
                authState={authState}
                snackbarActor={snackbarActor}
              />
            </RequireAuth>
          }
        />
        <Route
          path="/transaction/:transactionId"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <TransactionDetailContainer authState={authState} />
            </RequireAuth>
          }
        />
      </Routes>
    </MainLayout>
  );
}
