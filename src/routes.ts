import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',

  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  Codes = '/codes',
  Cars = '/cars',
  Tuning = '/tuning',
  Races = '/races',
  Map = '/map',
  Updates = '/updates',
  OfficialLinks = '/official-links',
  BeginnerGuide = '/guides/beginner-guide',
  MoneyGuide = '/guides/make-money-fast',
  BestCarGuide = '/guides/best-car-and-fastest-car',
  FullTuningGuide = '/guides/full-tuning-guide',
  SupraTuneGuide = '/guides/supra-tune',
  EngineFusionGuide = '/guides/engine-swaps-and-fusions',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Root;
