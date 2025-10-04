<template>
  <component :is="checkIconComponent(iconName)" :class="`icon-${size}`" :width="size" :height="size" viewBox="0 0 24 24" />
</template>
<script>
import AdjustmentIcon from './svg-icons/AdjustmentIcon.vue'
import AnalyticsIcon from './svg-icons/AnalyticIcon.vue'
import ArrowBoxDownIcon from './svg-icons/ArrowBoxDownIcon.vue'
import ArrowBoxUpIcon from './svg-icons/ArrowBoxUpIcon.vue'
import ArrowBoxLeftIcon from './svg-icons/ArrowBoxLeftIcon.vue'
import ArrowBoxRightIcon from './svg-icons/ArrowBoxRightIcon.vue'
import ArrowCircleLeftIcon from './svg-icons/ArrowCircleLeftIcon.vue'
import ArrowCircleRightIcon from './svg-icons/ArrowCircleRightIcon.vue'
import ArrowCircleUpIcon from './svg-icons/ArrowCircleUpIcon.vue'
import ArrowCircleDownIcon from './svg-icons/ArrowCircleDownIcon.vue'
import ArrowDownIcon from './svg-icons/ArrowDownIcon.vue'
import ArrowHorizontalIcon from './svg-icons/ArrowHorizontalIcon.vue'
import ArrowLeftIcon from './svg-icons/ArrowLeftIcon.vue'
import ArrowPlusIcon from './svg-icons/ArrowPlusIcon.vue'
import ArrowRightIcon from './svg-icons/ArrowRightIcon.vue'
import ArrowUpIcon from './svg-icons/ArrowUpIcon.vue'
import ArrowVerticalIcon from './svg-icons/ArrowVerticalIcon.vue'

import BadgeIcon from './svg-icons/BadgeIcon.vue'
import BagIcon from './svg-icons/BagIcon.vue'
import BellIcon from './svg-icons/BellIcon.vue'
import BookmarkIcon from './svg-icons/BookmarkIcon.vue'
import BriefCaseIcon from './svg-icons/BriefCaseIcon.vue'
import CalendarIcon from './svg-icons/CalendarIcon.vue'
import CallIcon from './svg-icons/CallIcon.vue'
import CallOffIcon from './svg-icons/CallOffIcon.vue'
import CallRingingIcon from './svg-icons/CallRingingIcon.vue'
import CameraIcon from './svg-icons/CameraIcon.vue'
import CartIcon from './svg-icons/CartIcon.vue'
import ChartPieIcon from './svg-icons/ChartPieIcon.vue'
import ChartSquareBarIcon from './svg-icons/ChartSquareBarIcon.vue'
import ChatIcon from './svg-icons/ChatIcon.vue'
import ChevronArrowDownIcon from './svg-icons/ChevronArrowDownIcon.vue'
import ChevronArrowLeftIcon from './svg-icons/ChevronArrowLeftIcon.vue'
import ChevronArrowRightIcon from './svg-icons/ChevronArrowRightIcon.vue'
import ChevronArrowUpIcon from './svg-icons/ChevronArrowUpIcon.vue'
import ChevronDownIcon from './svg-icons/ChevronDownIcon.vue'
import ChevronLeftIcon from './svg-icons/ChevronLeftIcon.vue'
import ChevronRightIcon from './svg-icons/ChevronRightIcon.vue'
import ChevronUpIcon from './svg-icons/ChevronUpIcon.vue'
import CircleDirectionIcon from './svg-icons/CircleDirectionIcon.vue'
import CircleIcon from './svg-icons/CircleIcon.vue'
import ClockCircleIcon from './svg-icons/ClockCircleIcon.vue'
import ClockSquareIcon from './svg-icons/ClockSquareIcon.vue'
import ControllerIcon from './svg-icons/ControllerIcon.vue'
import CropIcon from './svg-icons/CropIcon.vue'
import DocumentArrowDownIcon from './svg-icons/DocumentArrowDownIcon.vue'
import DocumentArrowUpIcon from './svg-icons/DocumentArrowUpIcon.vue'
import DocumentIcon from './svg-icons/DocumentIcon.vue'
import DocumentMinusIcon from './svg-icons/DocumentMinusIcon.vue'
import DocumentPlusIcon from './svg-icons/DocumentPlusIcon.vue'
import DocumentXIcon from './svg-icons/DocumentXIcon.vue'
import DocumentCodeIcon from './svg-icons/DocumentCodeIcon.vue'
import DotsCircleHorizontalIcon from './svg-icons/DotsCircleHorizontalIcon.vue'
import DotsSquareHorizontalIcon from './svg-icons/DotsSquareHorizontalIcon.vue'
import DoubleArrowUpIcon from './svg-icons/DoubleArrowUpIcon.vue'
import DoubleArrowDownIcon from './svg-icons/DoubleArrowUpIcon.vue'
import DoubleArrowLeftIcon from './svg-icons/DoubleArrowLeftIcon.vue'
import DoubleArrowRightIcon from './svg-icons/DoubleArrowRightIcon.vue'
import ExclamationCircleIcon from './svg-icons/ExclamationCircleIcon.vue'
import ExclamationTriangleIcon from './svg-icons/ExclamationTriangleIcon.vue'
import EyeFishIcon from './svg-icons/EyeFishIcon.vue'
import EyeIcon from './svg-icons/EyeIcon.vue'
import EntryIcon from './svg-icons/EntryIcon.vue'
import ExitIcon from './svg-icons/ExitIcon.vue'
import EyeOffIcon from './svg-icons/EyeOffIcon.vue'
import FileIcon from './svg-icons/FileIcon.vue'
import FileInvoiceIcon from './svg-icons/FileInvoiceIcon.vue'
import FilterIcon from './svg-icons/FilterIcon.vue'
import FolderIcon from './svg-icons/FolderIcon.vue'
import HeartIcon from './svg-icons/HeartIcon.vue'
import HomeIcon from './svg-icons/HomeIcon.vue'
import IIcon from './svg-icons/IIcon.vue'
import KeySquareIcon from './svg-icons/KeySquareIcon.vue'
import LocationArrowIcon from './svg-icons/LocationArrowIcon.vue'
import LocationIcon from './svg-icons/LocationIcon.vue'
import LockClosedIcon from './svg-icons/LockClosedIcon.vue'
import LockOpenIcon from './svg-icons/LockOpenIcon.vue'
import LightingIcon from './svg-icons/LightingIcon.vue'
import MessageIcon from './svg-icons/MessageIcon.vue'
import MicrophoneIcon from './svg-icons/MicrophoneIcon.vue'
import MicrophoneOnIcon from './svg-icons/MicrophoneOnIcon.vue'
import MissedCallIcon from './svg-icons/MissedCallIcon.vue'
import MoonIcon from './svg-icons/MoonIcon.vue'
import OfferIcon from '../solid/svg-icons/OfferIcon.vue'
import PencilAltIcon from './svg-icons/PencilAltIcon.vue'
import PencilIcon from './svg-icons/PencilIcon.vue'
import PhotoGalleryIcon from './svg-icons/PhotoGalleryIcon.vue'
import PhotographIcon from './svg-icons/PhotographIcon.vue'
import RefreshIcon from './svg-icons/RefreshIcon.vue'
import RefreshLeftIcon from './svg-icons/RefreshLeftIcon.vue'
import RefreshRightIcon from './svg-icons/RefreshRightIcon.vue'
import SaveIcon from './svg-icons/SaveIcon.vue'
import SaveUpIcon from './svg-icons/SaveUpIcon.vue'
import ScannerIcon from './svg-icons/ScannerIcon.vue'
import SearchIcon from './svg-icons/SearchIcon.vue'
import SearchMinusIcon from './svg-icons/SearchMinusIcon.vue'
import SearchPlusIcon from './svg-icons/SearchPlusIcon.vue'
import SettingIcon from './svg-icons/SettingIcon.vue'
import ShieldCheckIcon from './svg-icons/ShieldCheckIcon.vue'
import ShieldXIcon from './svg-icons/ShieldXIcon.vue'
import SquareIIcon from './svg-icons/SquareIIcon.vue'
import SquarePlusIcon from './svg-icons/SquarePlusIcon.vue'
import SquareTickIcon from './svg-icons/SquareTickIcon.vue'
import SquareXIcon from './svg-icons/SquareXIcon.vue'
import StarIcon from './svg-icons/StarIcon.vue'
import StartIcon from './svg-icons/StartIcon.vue'
import SwitchVerticalIcon from './svg-icons/SwitchVerticalIcon.vue'
import TicketIcon from './svg-icons/TicketIcon.vue'
import TimerIcon from './svg-icons/TimerIcon.vue'
import TrashIcon from './svg-icons/TrashIcon.vue'
import ThreeDotsIcon from './svg-icons/ThreeDotsIcon.vue'
import TableIcon from './svg-icons/TableIcon.vue'
import UserAddIcon from './svg-icons/UserAddIcon.vue'
import UserGroupIcon from './svg-icons/UserGroupIcon.vue'
import UserIcon from './svg-icons/UserIcon.vue'
import UsersIcon from './svg-icons/UsersIcon.vue'
import VideoIcon from './svg-icons/VideoIcon.vue'
import ViewGridIcon from './svg-icons/ViewGridIcon.vue'
import VolumeIcon from './svg-icons/VolumeIcon.vue'
import VolumeOffIcon from './svg-icons/VolumeOffIcon.vue'
import VolumeOnIcon from './svg-icons/VolumeOnIcon.vue'
import WalletIcon from './svg-icons/WalletIcon.vue'
export default {
  components: {
    LightingIcon,
    MoonIcon,
    AdjustmentIcon,
    AnalyticsIcon,
    ArrowBoxDownIcon,
    ArrowBoxUpIcon,
    ArrowBoxLeftIcon,
    ArrowBoxRightIcon,
    ArrowCircleDownIcon,
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
    ArrowCircleUpIcon,
    ArrowDownIcon,
    ArrowHorizontalIcon,
    ArrowLeftIcon,
    ArrowPlusIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    ArrowVerticalIcon,
    BadgeIcon,
    BagIcon,
    BellIcon,
    BookmarkIcon,
    BriefCaseIcon,
    CalendarIcon,
    CallIcon,
    CallOffIcon,
    CallRingingIcon,
    CameraIcon,
    CartIcon,
    ChartPieIcon,
    ChartSquareBarIcon,
    ChatIcon,
    ChevronArrowDownIcon,
    ChevronArrowLeftIcon,
    ChevronArrowRightIcon,
    ChevronArrowUpIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CircleDirectionIcon,
    CircleIcon,
    ClockCircleIcon,
    ClockSquareIcon,
    ControllerIcon,
    CropIcon,
    DoubleArrowUpIcon,
    DoubleArrowDownIcon,
    DoubleArrowLeftIcon,
    DoubleArrowRightIcon,
    DocumentArrowDownIcon,
    DocumentArrowUpIcon,
    DocumentIcon,
    DocumentMinusIcon,
    DocumentPlusIcon,
    DocumentXIcon,
    DotsCircleHorizontalIcon,
    DotsSquareHorizontalIcon,
    DocumentCodeIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    EyeFishIcon,
    EyeIcon,
    EyeOffIcon,
    EntryIcon,
    ExitIcon,
    FileIcon,
    FileInvoiceIcon,
    FilterIcon,
    FolderIcon,
    HeartIcon,
    HomeIcon,
    IIcon,
    KeySquareIcon,
    LocationArrowIcon,
    LocationIcon,
    LockClosedIcon,
    LockOpenIcon,

    MessageIcon,
    OfferIcon,
    MicrophoneIcon,
    MicrophoneOnIcon,
    MissedCallIcon,
    PencilAltIcon,
    PencilIcon,

    PhotoGalleryIcon,
    PhotographIcon,
    RefreshIcon,
    RefreshLeftIcon,
    RefreshRightIcon,
    SaveIcon,
    SaveUpIcon,
    ScannerIcon,
    SearchIcon,
    SearchMinusIcon,
    SearchPlusIcon,
    SettingIcon,
    ShieldCheckIcon,
    ShieldXIcon,
    SquareIIcon,
    SquarePlusIcon,
    SquareTickIcon,
    SquareXIcon,
    StarIcon,
    StartIcon,
    SwitchVerticalIcon,
    TicketIcon,
    TimerIcon,
    TrashIcon,
    TableIcon,
    ThreeDotsIcon,
    UserAddIcon,
    UserGroupIcon,
    UserIcon,
    UsersIcon,
    VideoIcon,
    ViewGridIcon,
    VolumeIcon,
    VolumeOffIcon,
    VolumeOnIcon,
    WalletIcon
  },
  props: {
    iconName: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 24
    }
  },
  setup() {
    const checkIconComponent = (name) => {
      return name + '-icon'
    }
    return {
      checkIconComponent
    }
  }
}
</script>
