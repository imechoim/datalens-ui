import {RangeInputPicker} from 'ui/components/common/RangeInputPicker';

import {Datepicker} from '../../../components/common/Datepicker/Datepicker';
import {RangeDatepicker} from '../../../components/common/RangeDatepicker';
import {SimpleDatepicker} from '../../../components/common/SimpleDatepicker';
import Timings from '../../../libs/DatalensChartkit/components/ChartKitBase/components/Header/components/Menu/Items/Inspector/Timings/Timings';
import {makeDefaultEmpty} from '../../components/DefaultEmpty';

import {Example} from './components/Example/Example';
import {EXAMPLE_COMPONENT} from './constants/components';
import type {AccessRightsProps} from './types/components/AccessRights';
import type {AccessRightsUrlOpenProps} from './types/components/AccessRightsUrlOpen';
import type {ActionPanelEntrySelectProps} from './types/components/ActionPanelEntrySelect';
import type {ButtonFavoriteProps} from './types/components/ButtonFavorite';
import type {CloudTreeSelectBaseProps} from './types/components/CloudTreeSelectBase';
import type {DialogAddParticipantsProps} from './types/components/DialogAddParticipants';
import type {DownloadScreenshotProps} from './types/components/DownloadScreenshot';
import type {EntryBreadcrumbsProps} from './types/components/EntryBreadcrumbs';
import type {IamAccessDialogProps} from './types/components/IamAccessDialog';
import type {PlaceholderIllustrationImageProps} from './types/components/PlaceholderIllustrationImage';
import type {ReportButtonProps} from './types/components/ReportButton';
import type {UserAvatarByIdProps} from './types/components/UserAvatarById';
import type {YfmWrapperProps} from './types/components/YfmWrapper';

export const commonComponentsMap = {
    [EXAMPLE_COMPONENT]: Example,
    CloudTreeSelectBase: makeDefaultEmpty<CloudTreeSelectBaseProps>(),
    DownloadScreenshot: makeDefaultEmpty<DownloadScreenshotProps>(),
    YfmWrapperContent: makeDefaultEmpty<YfmWrapperProps>(),
    ActionPanelEntrySelect: makeDefaultEmpty<ActionPanelEntrySelectProps>(),
    EntryBreadcrumbs: makeDefaultEmpty<EntryBreadcrumbsProps>(),
    MobileHeaderComponent: makeDefaultEmpty<{}>(),
    PlaceholderIllustrationImage: makeDefaultEmpty<PlaceholderIllustrationImageProps>(),
    ReportButton: makeDefaultEmpty<ReportButtonProps>(),
    AccessRights: makeDefaultEmpty<AccessRightsProps>(),
    DialogAddParticipants: makeDefaultEmpty<DialogAddParticipantsProps>(),
    AccessRightsUrlOpenComponent: makeDefaultEmpty<AccessRightsUrlOpenProps>(),
    IamAccessDialogComponent: makeDefaultEmpty<IamAccessDialogProps>(),
    UserAvatarById: makeDefaultEmpty<UserAvatarByIdProps>(),
    Datepicker: Datepicker,
    Timings: Timings,
    SimpleDatepicker: SimpleDatepicker,
    RangeDatepicker: RangeDatepicker,
    RangeInputPicker: RangeInputPicker,
    ButtonFavorite: makeDefaultEmpty<ButtonFavoriteProps>(),
} as const;
