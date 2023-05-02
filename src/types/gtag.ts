
/**
 * gtag definition, referenced via here https://developers.google.com/tag-platform/gtagjs/reference
 * 
 */
type requestedFieldCallback = (fieldName:string) => void;
type eventCallback = () => void;

interface KeyValueParams {
  [key:string]: string | number | boolean;
}

interface ConsentParams {
  ad_storage: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  wait_for_update: number;
}

interface ControlParams {
  groups: string;
  send_to: string;
  event_callback:eventCallback;
  event_timeout:number;
}

interface ItemParameters {
  item_id: string;
  item_name: string;
  affiliation?:string;
  coupon?:string;
  discount?:number;
  index?:number;
  item_brand?:string;
  item_category?:string;
  item_category2?:string;
  item_category3?:string;
  item_category4?:string;
  item_category5?:string;
  item_list_id?:string;
  item_list_name?:string;
  item_variant?:string;
  location_id?:string;
  price?:number;
  quantity?:number;
}

interface PromotionParameters extends ItemParameters {
  creative_name?:string;
  creative_slot?:string;
  promotion_id?:string;
  promotion_name?:string;
}

interface AddPaymentInfo {
  currency: string;
  value: number;
  coupon?:string;
  payment_type?:string;
  items:Array<ItemParameters>;
}

interface AddShippingInfo {
  currency:string;
  value:number;
  coupon?:string;
  shipping_tier?:string;
  items: Array<ItemParameters>;
}

interface AddToCart {
  currency:string;
  value:number;
  items:Array<ItemParameters>;
}

interface AddToWishlistOrRemoveFromCart {
  currency:string;
  value:number;
  items:Array<ItemParameters>;
}

interface EarnVirtualCurrency {
  earn_virtual_currency?:string;
  value?:number;
}

interface Exception {
  description?:string;
  fatal?:boolean;
}

interface GenerateLead {
  currency:string;
  value:number;
}

interface LevelEnd {
  level_name?: string;
  success?:boolean;
}

interface LevelUp {
  level?: number;
  character?:string;
}

interface PageView {
  page_location?: string;
  client_id?: string;
  language?: string;
  page_encoding?: string;
  page_title?: string;
  user_agent?: string;
}

interface PostScore {
  score:number;
  level?:number;
  character?:string;
}

interface PurchaseRefund {
  currency:string;
  transaction_id:string;
  value:number;
  coupon?:string;
  shipping?:number;
  tax?:number;
  items:Array<ItemParameters>;
}

interface SelectContent {
  content_type?:string;
  content_id?:string;
}

interface SelectItem {
  item_list_id?:string;
  item_list_name?:string;
  items:Array<ItemParameters>;
}

interface SelectPromotion {
  creative_name?:string;
  creative_slot?:string;
  promotion_id?:string;
  promotion_name?:string;
  items:Array<PromotionParameters>;
}

interface Share {
  method?:string;
  content_type?:string;
  item_id?:string;
}

interface SignUp {
  method?:string;
}

interface SpendVirtualCurrency {
  value:number;
  virtual_currency_name:string;
  item_name:string;
}

interface UnlockAchievement {
  achievement_id:string;
}

interface ViewCart {
  currency:string;
  value:number;
  items: Array<ItemParameters>
}

interface ViewItem {
  currency:string;
  value:number;
  items:Array<ItemParameters>;
}

interface ViewItemList {
  item_list_id?:string;
  item_list_name?:string;
  items:Array<ItemParameters>;
}

interface ViewPromotion {
  creative_name?:string;
  creative_slot?:string;
  promotion_id?:string;
  promotion_name?:string;
  items:Array<PromotionParameters>;
}

interface ViewSearchResults {
  search_term?:string;
}

interface JoinGroup {
  group_id?:string;
}

interface LevelStart {
  level_name:string
}

interface Login {
  login?:string;
}

interface Search {
  search_term:string
}

interface gtag {
  (command:'config', TARGET_ID:string, configInfo?: KeyValueParams | ControlParams): void;
  (command:'js', value: Date):void;
  (command:'get', TARGET_ID:string, fieldName:string, callbackFunc: requestedFieldCallback): void;
  (command:'set', customerParameter: KeyValueParams | ControlParams):void;
  (command:'event', eventName:'add_payment_info', customerParameter:AddPaymentInfo | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'add_shipping_info', customerParameter:AddShippingInfo | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'add_to_cart', customerParameter:AddToCart | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'add_to_wishlist', customerParameter:AddToWishlistOrRemoveFromCart | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'begin_checkout', customerParameter:AddToWishlistOrRemoveFromCart | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'earn_virtual_currency', customerParameter:EarnVirtualCurrency | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'exception', customerParameter:Exception | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'generate_lead', customerParameter:GenerateLead | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'join_group', customerParameter:JoinGroup | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'level_end', customerParameter:LevelEnd | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'level_start', customerParameter:LevelStart | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'level_up', customerParameter:LevelUp | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'login', customerParameter:Login | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'page_view', customerParameter:PageView | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'post_score', customerParameter:PostScore | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'purchase', customerParameter:PurchaseRefund | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'refund', customerParameter:PurchaseRefund | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'remove_from_cart', customerParameter:AddToWishlistOrRemoveFromCart | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'search', customerParameter:Search | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'select_content', customerParameter:SelectContent | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'select_item', customerParameter:SelectItem | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'select_promotion', customerParameter:SelectPromotion | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'share', customerParameter:Share | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'sign_up', customerParameter:SignUp | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'spend_virtual_currency', customerParameter:SpendVirtualCurrency | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'tutorial_begin', customerParameter:KeyValueParams | ControlParams):void;
  (command:'event', eventName:'tutorial_complete', customerParameter:KeyValueParams | ControlParams):void;
  (command:'event', eventName:'unlock_achievement', customerParameter:UnlockAchievement | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'view_cart', customerParameter:ViewCart | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'view_item', customerParameter:ViewItem | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'view_item_list', customerParameter:ViewItemList | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'view_promotion', customerParameter:ViewPromotion | KeyValueParams | ControlParams):void;
  (command:'event', eventName:'view_search_results', customerParameter:ViewSearchResults | KeyValueParams | ControlParams):void;
  (command:'event', eventName:string, customerParameter:KeyValueParams | ControlParams):void;
  (command:'consent', consent:'default', customerParameter:ConsentParams | KeyValueParams):void;
  (command:'consent', consent:'update', customerParameter:ConsentParams | KeyValueParams):void;
}

export {gtag, KeyValueParams};