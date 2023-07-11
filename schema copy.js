// schema.js
import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    rel(request: RelRequest!): Void
    cur(request: CurRequest!): [String!]!
    gdm(request: GdmRequest!): [Url!]!
    gct(request: GctRequest!): [String!]!
    iss(request: PriRequest!): PrfResponse!
    challenge(request: ChallengeRequest!): AuthChallengeResult!
    verify(request: VerifyRequest!): Boolean!
    txIdToTxHash(txId: TxId!): TxHash!
    claimableHandles: ClaimableHandles!
    claimableStatus: ClaimStatus!
    isIDKitPhoneVerified: Boolean!
    dataAvailabilitySubmitters: DataAvailabilitySubmittersResult!
    dataAvailabilitySummary: DataAvailabilitySummaryResult!
    dataAvailabilityTransactions(
      request: DataAvailabilityTransactionsRequest
    ): DataAvailabilityTransactionsResult!
    dataAvailabilityTransaction(
      request: DataAvailabilityTransactionRequest!
    ): DataAvailabilityTransactionUnion
    explorePublications(
      request: ExplorePublicationRequest!
    ): ExplorePublicationResult!
    exploreProfiles(request: ExploreProfilesRequest!): ExploreProfileResult!
    feed(request: FeedRequest!): PaginatedFeedResult!
    feedHighlights(request: FeedHighlightsRequest!): PaginatedTimelineResult!
    pendingApprovalFollows(
      request: PendingApprovalFollowsRequest!
    ): PendingApproveFollowsResult!
    doesFollow(request: DoesFollowRequest!): [DoesFollowResponse!]!
    following(request: FollowingRequest!): PaginatedFollowingResult!
    followers(request: FollowersRequest!): PaginatedFollowersResult!
    followerNftOwnedTokenIds(
      request: FollowerNftOwnedTokenIdsRequest!
    ): FollowerNftOwnedTokenIds
    mutualFollowersProfiles(
      request: MutualFollowersProfilesQueryRequest!
    ): PaginatedProfileResult!
    ping: String!
    hasTxHashBeenIndexed(
      request: HasTxHashBeenIndexedRequest!
    ): TransactionResult!
    internalPin(request: InternalPinRequest!): [InternalPinResult!]!
    enabledModuleCurrencies: [Erc20!]!
    approvedModuleAllowanceAmount(
      request: ApprovedModuleAllowanceAmountRequest!
    ): [ApprovedAllowanceAmount!]!
    generateModuleCurrencyApprovalData(
      request: GenerateModuleCurrencyApprovalDataRequest!
    ): GenerateModuleCurrencyApproval!
    profileFollowModuleBeenRedeemed(
      request: ProfileFollowModuleBeenRedeemedRequest!
    ): Boolean!
    enabledModules: EnabledModules!
    unknownEnabledModules: EnabledModules!

    nftGalleries(request: NftGalleriesRequest!): [NftGallery!]!

    nfts(request: NFTsRequest!): NFTsResult!

    nftCollections(request: NftCollectionsRequest!): NftCollectionResult!

    searchNfts(request: NFTSearchRequest!): NFTsResult!
    nftOwnershipChallenge(
      request: NftOwnershipChallengeRequest!
    ): NftOwnershipChallengeResult!
    notifications(request: NotificationRequest!): PaginatedNotificationResult!
    profileOnChainIdentity(
      request: ProfileOnChainIdentityRequest!
    ): [OnChainIdentity!]!

    profileInterests: [ProfileInterest!]!
    profiles(request: ProfileQueryRequest!): PaginatedProfileResult!
    profile(request: SingleProfileQueryRequest!): Profile
    recommendedProfiles(options: RecommendedProfileOptions): [Profile!]!
    defaultProfile(request: DefaultProfileRequest!): Profile
    globalProtocolStats(
      request: GlobalProtocolStatsRequest
    ): GlobalProtocolStats!
    proxyActionStatus(proxyActionId: ProxyActionId!): ProxyActionStatusResultUnion!
    validatePublicationMetadata(request: ValidatePublicationMetadataRequest!): PublicationValidateMetadataResult!
    publicationMetadataStatus(request: GetPublicationMetadataStatusRequest!): PublicationMetadataStatus!
    publications(request: PublicationsQueryRequest!): PaginatedPublicationResult!
    publication(request: PublicationQueryRequest!): Publication
    whoCollectedPublication(request: WhoCollectedPublicationRequest!): PaginatedWhoCollectedResult!
    profilePublicationsForSale(request: ProfilePublicationsForSaleRequest!): PaginatedProfilePublicationsForSaleResult!
    allPublicationsTags(request: AllPublicationsTagsRequest!): PaginatedAllPublicationsTagsResult!
    publicationsProfileBookmarks(request: PublicationsProfileBookmarkedQueryRequest!): PaginatedPublicationResult!
    forYou(request: PublicationForYouRequest!): PaginatedForYouResult!
    whoReactedPublication(request: WhoReactedPublicationRequest!): PaginatedWhoReactedResult!
    relayQueues: [RelayQueueResult!]!
    profilePublicationRevenue(request: ProfilePublicationRevenueQueryRequest!): ProfilePublicationRevenueResult!
    publicationRevenue(request: PublicationRevenueQueryRequest!): PublicationRevenue
    profileFollowRevenue(request: ProfileFollowRevenueQueryRequest!): FollowRevenueResult!
    search(request: SearchQueryRequest!): SearchResult!
    userSigNonces: UserSigNonces!
    # getProfile(id: ID!): Profile,
  }


  scalar Void

  input RelRequest {
    secret: String!
    ethereumAddress: EthereumAddress!
  }

  scalar EthereumAddress

  input CurRequest {
    secret: String!
  }

  scalar Url

  input GdmRequest {
    secret: String!
  }

  input GctRequest {
    secret: String!
    hhh: String!
  }

  type PrfResponse {
    ss: Boolean!
    dd: Boolean!
  }

  input PriRequest {
    secret: String!
    hhh: String!
  }

  type AuthChallengeResult {
    text: String!
  }

  input ChallengeRequest {
    address: EthereumAddress!
  }

  input VerifyRequest {
    accessToken: Jwt!
  }

  scalar Jwt

  scalar TxHash

  scalar TxId

  type ClaimableHandles {
    reservedHandles: [ReservedClaimableHandle!]!
    canClaimFreeTextHandle: Boolean!
  }

  type ReservedClaimableHandle {
    id: HandleClaimIdScalar!
    handle: Handle!
    source: String!
    expiry: DateTime!
  }

  scalar HandleClaimIdScalar

  scalar Handle

  scalar DateTime

  enum ClaimStatus {
    ALREADY_CLAIMED
    CLAIM_FAILED
    NOT_CLAIMED
  }

  type DataAvailabilitySubmittersResult {
    items: [DataAvailabilitySubmitterResult!]!
    pageInfo: PaginatedResultInfo!
  }

  type DataAvailabilitySubmitterResult {
    address: EthereumAddress!
    name: String!
    totalTransactions: Int!
  }

  type PaginatedResultInfo {
    prev: Cursor

    next: Cursor

    totalCount: Int
  }

  scalar Cursor

  type DataAvailabilitySummaryResult {
    totalTransactions: Int!
  }

  type DataAvailabilityTransactionsResult {
    items: [DataAvailabilityTransactionUnion!]!
    pageInfo: PaginatedResultInfo!
  }

  union DataAvailabilityTransactionUnion =
      DataAvailabilityPost
    | DataAvailabilityComment
    | DataAvailabilityMirror

  type DataAvailabilityPost {
    transactionId: String!
    submitter: EthereumAddress!
    createdAt: DateTime!
    appId: Sources
    verificationStatus: DataAvailabilityVerificationStatusUnion!
    profile: Profile!
    publicationId: InternalPublicationId!
  }

  scalar Sources

  union DataAvailabilityVerificationStatusUnion =
      DataAvailabilityVerificationStatusSuccess
    | DataAvailabilityVerificationStatusFailure

  type DataAvailabilityVerificationStatusSuccess {
    verified: Boolean!
  }

  type DataAvailabilityVerificationStatusFailure {
    status: MomokaValidatorError
  }

  enum MomokaValidatorError {
    NO_SIGNATURE_SUBMITTER
    INVALID_SIGNATURE_SUBMITTER
    TIMESTAMP_PROOF_INVALID_SIGNATURE
    TIMESTAMP_PROOF_INVALID_TYPE
    TIMESTAMP_PROOF_INVALID_DA_ID
    TIMESTAMP_PROOF_NOT_SUBMITTER
    CAN_NOT_CONNECT_TO_BUNDLR
    INVALID_TX_ID
    INVALID_FORMATTED_TYPED_DATA
    BLOCK_CANT_BE_READ_FROM_NODE
    DATA_CANT_BE_READ_FROM_NODE
    SIMULATION_NODE_COULD_NOT_RUN
    SIMULATION_FAILED
    EVENT_MISMATCH
    INVALID_EVENT_TIMESTAMP
    INVALID_TYPED_DATA_DEADLINE_TIMESTAMP
    GENERATED_PUBLICATION_ID_MISMATCH
    INVALID_POINTER_SET_NOT_NEEDED
    POINTER_FAILED_VERIFICATION
    NOT_CLOSEST_BLOCK
    BLOCK_TOO_FAR
    PUBLICATION_NO_POINTER
    PUBLICATION_NONE_DA
    PUBLICATION_NONCE_INVALID
    PUBLICATION_SIGNER_NOT_ALLOWED
    CHAIN_SIGNATURE_ALREADY_USED
    POTENTIAL_REORG
    UNKNOWN
  }

  type Profile {
    id: ProfileId!

    name: String

    bio: String

    followNftAddress: ContractAddress

    metadata: Url

    handle: Handle!

    picture: ProfileMedia

    coverPicture: ProfileMedia

    ownedBy: EthereumAddress!

    dispatcher: Dispatcher

    stats: ProfileStats!

    followModule: FollowModule

    isDefault: Boolean!

    attributes: [Attribute!]

    onChainIdentity: OnChainIdentity!

    interests: [ProfileInterest!]
    isFollowedByMe(isFinalisedOnChain: Boolean): Boolean!
    isFollowing(who: ProfileId): Boolean!
  }

  scalar ProfileId

  scalar ContractAddress

  union ProfileMedia = NftImage | MediaSet

  type NftImage {
    contractAddress: ContractAddress!

    tokenId: String!

    uri: Url!

    chainId: Int!

    verified: Boolean!
  }

  type MediaSet {
    onChain: Media!

    original: Media!

    optimized: Media

    small: Media
      @deprecated(
        reason: "should not be used will always be null - use transform function to get small media"
      )

    medium: Media
      @deprecated(
        reason: "should not be used will always be null - use transform function to get small media"
      )
    transformed(params: MediaTransformParams!): Media
  }

  type Media {
    url: Url!

    width: Int

    height: Int

    size: Int

    mimeType: MimeType

    altTag: String

    cover: Url
  }

  scalar MimeType

  input MediaTransformParams {
    width: ImageSizeTransform = "auto"

    height: ImageSizeTransform = "auto"

    keepAspectRatio: Boolean = true
  }

  scalar ImageSizeTransform

  type Dispatcher {
    address: EthereumAddress!

    canUseRelay: Boolean!

    sponsor: Boolean!
  }

  type ProfileStats {
    id: ProfileId!

    totalFollowers: Int!

    totalFollowing: Int!

    totalPosts: Int!

    totalComments: Int!

    totalMirrors: Int!

    totalPublications: Int!

    totalCollects: Int!
    commentsTotal(forSources: [Sources!]!): Int!
    postsTotal(forSources: [Sources!]!): Int!
    mirrorsTotal(forSources: [Sources!]!): Int!
    publicationsTotal(forSources: [Sources!]!): Int!
  }

  union FollowModule =
      FeeFollowModuleSettings
    | ProfileFollowModuleSettings
    | RevertFollowModuleSettings
    | UnknownFollowModuleSettings

  type FeeFollowModuleSettings {
    type: FollowModules!
    contractAddress: ContractAddress!

    amount: ModuleFeeAmount!

    recipient: EthereumAddress!
  }

  enum FollowModules {
    FeeFollowModule
    RevertFollowModule
    ProfileFollowModule
    UnknownFollowModule
  }

  type ModuleFeeAmount {
    asset: Erc20!

    value: String!
  }

  type Erc20 {
    name: String!

    symbol: String!

    decimals: Int!

    address: ContractAddress!
  }

  type ProfileFollowModuleSettings {
    type: FollowModules!
    contractAddress: ContractAddress!
  }

  type RevertFollowModuleSettings {
    type: FollowModules!
    contractAddress: ContractAddress!
  }

  type UnknownFollowModuleSettings {
    type: FollowModules!
    contractAddress: ContractAddress!

    followModuleReturnData: FollowModuleData!
  }

  scalar FollowModuleData

  type Attribute {
    displayType: String

    traitType: String

    key: String!

    value: String!
  }

  type OnChainIdentity {
    proofOfHumanity: Boolean!

    ens: EnsOnChainIdentity

    sybilDotOrg: SybilDotOrgIdentity!

    worldcoin: WorldcoinIdentity!
  }

  type EnsOnChainIdentity {
    name: Ens
  }

  scalar Ens

  type SybilDotOrgIdentity {
    verified: Boolean!
    source: SybilDotOrgIdentitySource!
  }

  type SybilDotOrgIdentitySource {
    twitter: SybilDotOrgTwitterIdentity!
  }

  type SybilDotOrgTwitterIdentity {
    handle: String
  }

  type WorldcoinIdentity {
    isHuman: Boolean!
  }

  scalar ProfileInterest

  scalar InternalPublicationId

  type DataAvailabilityComment {
    transactionId: String!
    submitter: EthereumAddress!
    createdAt: DateTime!
    appId: Sources
    verificationStatus: DataAvailabilityVerificationStatusUnion!
    profile: Profile!
    publicationId: InternalPublicationId!
    commentedOnProfile: Profile!
    commentedOnPublicationId: InternalPublicationId!
  }

  type DataAvailabilityMirror {
    transactionId: String!
    submitter: EthereumAddress!
    createdAt: DateTime!
    appId: Sources
    verificationStatus: DataAvailabilityVerificationStatusUnion!
    profile: Profile!
    publicationId: InternalPublicationId!
    mirrorOfProfile: Profile!
    mirrorOfPublicationId: InternalPublicationId!
  }

  input DataAvailabilityTransactionsRequest {
    limit: LimitScalar
    cursor: Cursor
    profileId: ProfileId
  }

  scalar LimitScalar

  input DataAvailabilityTransactionRequest {
    id: String!
  }

  type ExplorePublicationResult {
    items: [Publication!]!
    pageInfo: PaginatedResultInfo!
  }

  union Publication = Post | Comment | Mirror

  type Post {
    id: InternalPublicationId!

    profile: Profile!

    stats: PublicationStats!

    metadata: MetadataOutput!

    onChainContentURI: String!

    createdAt: DateTime!

    collectModule: CollectModule!

    referenceModule: ReferenceModule

    appId: Sources

    hidden: Boolean!

    collectNftAddress: ContractAddress

    isGated: Boolean!

    isDataAvailability: Boolean!

    dataAvailabilityProofs: String

    collectedBy: Wallet

    reaction(request: ReactionFieldResolverRequest): ReactionTypes
    notInterested(by: ProfileId): Boolean!
    bookmarked(by: ProfileId): Boolean!
    hasCollectedByMe(isFinalisedOnChain: Boolean): Boolean!
    canComment(profileId: ProfileId): CanCommentResponse!
    canMirror(profileId: ProfileId): CanMirrorResponse!
    canDecrypt(
      profileId: ProfileId
      address: EthereumAddress
    ): CanDecryptResponse!
    mirrors(by: ProfileId): [InternalPublicationId!]!
  }

  type PublicationStats {
    id: InternalPublicationId!

    totalAmountOfMirrors: Int!

    totalAmountOfCollects: Int!

    totalAmountOfComments: Int!

    totalUpvotes: Int!

    totalDownvotes: Int!

    totalBookmarks: Int!
    commentsTotal(
      forSources: [Sources!] = []

      customFilters: [CustomFiltersTypes!] = []
    ): Int!
  }

  enum CustomFiltersTypes {
    GARDENERS
  }

  type MetadataOutput {
    name: String

    description: Markdown

    content: Markdown

    image: Url

    cover: MediaSet

    media: [MediaSet!]!

    attributes: [MetadataAttributeOutput!]!

    locale: Locale

    tags: [String!]!

    contentWarning: PublicationContentWarning

    mainContentFocus: PublicationMainFocus!

    animatedUrl: Url

    encryptionParams: EncryptionParamsOutput
  }

  scalar Markdown

  type MetadataAttributeOutput {
    displayType: PublicationMetadataDisplayTypes

    traitType: String

    value: String
  }

  enum PublicationMetadataDisplayTypes {
    number
    string
    date
  }

  scalar Locale

  enum PublicationContentWarning {
    NSFW
    SENSITIVE
    SPOILER
  }

  enum PublicationMainFocus {
    VIDEO
    IMAGE
    ARTICLE
    TEXT_ONLY
    AUDIO
    LINK
    EMBED
  }

  type EncryptionParamsOutput {
    providerSpecificParams: ProviderSpecificParamsOutput!

    encryptionProvider: EncryptionProvider!

    accessCondition: AccessConditionOutput!

    encryptedFields: EncryptedFieldsOutput!
  }

  type ProviderSpecificParamsOutput {
    encryptionKey: ContentEncryptionKey!
  }

  scalar ContentEncryptionKey

  enum EncryptionProvider {
    LIT_PROTOCOL
  }

  type AccessConditionOutput {
    nft: NftOwnershipOutput

    token: Erc20OwnershipOutput

    eoa: EoaOwnershipOutput

    profile: ProfileOwnershipOutput

    follow: FollowConditionOutput

    collect: CollectConditionOutput

    and: AndConditionOutput

    or: OrConditionOutput
  }

  type NftOwnershipOutput {
    contractAddress: ContractAddress!

    chainID: ChainId!

    contractType: ContractType!

    tokenIds: [TokenId!]
  }

  scalar ChainId

  enum ContractType {
    ERC721
    ERC1155
    ERC20
  }

  scalar TokenId

  type Erc20OwnershipOutput {
    contractAddress: ContractAddress!

    chainID: ChainId!

    amount: String!

    decimals: Float!

    condition: ScalarOperator!

    name: String!

    symbol: String!
  }

  enum ScalarOperator {
    EQUAL
    NOT_EQUAL
    GREATER_THAN
    GREATER_THAN_OR_EQUAL
    LESS_THAN
    LESS_THAN_OR_EQUAL
  }

  type EoaOwnershipOutput {
    address: EthereumAddress!
  }

  type ProfileOwnershipOutput {
    profileId: ProfileId!
  }

  type FollowConditionOutput {
    profileId: ProfileId!
  }

  type CollectConditionOutput {
    publicationId: InternalPublicationId

    thisPublication: Boolean
  }

  type AndConditionOutput {
    criteria: [AccessConditionOutput!]!
  }

  type OrConditionOutput {
    criteria: [AccessConditionOutput!]!
  }

  type EncryptedFieldsOutput {
    content: EncryptedValueScalar

    image: EncryptedValueScalar

    media: [EncryptedMediaSet!]

    animation_url: EncryptedValueScalar

    external_url: EncryptedValueScalar
  }

  scalar EncryptedValueScalar

  type EncryptedMediaSet {
    original: EncryptedMedia!

    small: EncryptedMedia
      @deprecated(reason: "should not be used will always be null")

    medium: EncryptedMedia
      @deprecated(reason: "should not be used will always be null")
  }

  type EncryptedMedia {
    url: Url!

    width: Int

    height: Int

    size: Int

    mimeType: MimeType

    altTag: EncryptedValueScalar

    cover: EncryptedValueScalar
  }

  union CollectModule =
      FreeCollectModuleSettings
    | FeeCollectModuleSettings
    | LimitedFeeCollectModuleSettings
    | LimitedTimedFeeCollectModuleSettings
    | RevertCollectModuleSettings
    | TimedFeeCollectModuleSettings
    | MultirecipientFeeCollectModuleSettings
    | SimpleCollectModuleSettings
    | ERC4626FeeCollectModuleSettings
    | AaveFeeCollectModuleSettings
    | UnknownCollectModuleSettings

  type FreeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    followerOnly: Boolean!
  }

  enum CollectModules {
    LimitedFeeCollectModule
    FeeCollectModule
    LimitedTimedFeeCollectModule
    TimedFeeCollectModule
    AaveFeeCollectModule
    RevertCollectModule
    FreeCollectModule
    MultirecipientFeeCollectModule
    ERC4626FeeCollectModule
    SimpleCollectModule
    UnknownCollectModule
  }

  type FeeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    amount: ModuleFeeAmount!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!
  }

  type LimitedFeeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    collectLimit: String!

    amount: ModuleFeeAmount!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!
  }

  type LimitedTimedFeeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    collectLimit: String!

    amount: ModuleFeeAmount!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!

    endTimestamp: DateTime!
  }

  type RevertCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!
  }

  type TimedFeeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    amount: ModuleFeeAmount!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!

    endTimestamp: DateTime!
  }

  type MultirecipientFeeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    amount: ModuleFeeAmount!

    collectLimit: String

    referralFee: Float!

    followerOnly: Boolean!

    endTimestamp: DateTime

    recipients: [RecipientDataOutput!]!
  }

  type RecipientDataOutput {
    recipient: EthereumAddress!

    split: Float!
  }

  type SimpleCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    fee: ModuleFee

    collectLimit: String

    followerOnly: Boolean!

    endTimestamp: DateTime
  }

  type ModuleFee {
    amount: ModuleFeeAmount!

    recipient: EthereumAddress!

    referralFee: Float!
  }

  type ERC4626FeeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    vault: ContractAddress!

    amount: ModuleFeeAmount!

    recipient: EthereumAddress!

    collectLimit: String

    referralFee: Float!

    followerOnly: Boolean!

    endTimestamp: DateTime
  }

  type AaveFeeCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    amount: ModuleFeeAmount!

    collectLimit: String

    referralFee: Float!

    followerOnly: Boolean!

    endTimestamp: DateTime

    recipient: EthereumAddress!
  }

  type UnknownCollectModuleSettings {
    type: CollectModules!
    contractAddress: ContractAddress!

    collectModuleReturnData: CollectModuleData!
  }

  scalar CollectModuleData

  union ReferenceModule =
      FollowOnlyReferenceModuleSettings
    | UnknownReferenceModuleSettings
    | DegreesOfSeparationReferenceModuleSettings

  type FollowOnlyReferenceModuleSettings {
    type: ReferenceModules!
    contractAddress: ContractAddress!
  }

  enum ReferenceModules {
    FollowerOnlyReferenceModule
    DegreesOfSeparationReferenceModule
    UnknownReferenceModule
  }

  type UnknownReferenceModuleSettings {
    type: ReferenceModules!
    contractAddress: ContractAddress!

    referenceModuleReturnData: ReferenceModuleData!
  }

  scalar ReferenceModuleData

  type DegreesOfSeparationReferenceModuleSettings {
    type: ReferenceModules!
    contractAddress: ContractAddress!

    commentsRestricted: Boolean!

    mirrorsRestricted: Boolean!

    degreesOfSeparation: Int!
  }

  type Wallet {
    address: EthereumAddress!

    defaultProfile: Profile
  }

  enum ReactionTypes {
    UPVOTE
    DOWNVOTE
  }

  input ReactionFieldResolverRequest {
    profileId: ProfileId
  }

  type CanCommentResponse {
    result: Boolean!
  }

  type CanMirrorResponse {
    result: Boolean!
  }

  type CanDecryptResponse {
    result: Boolean!
    reasons: [DecryptFailReason!]
    extraDetails: String
  }

  enum DecryptFailReason {
    UNAUTHORIZED_ADDRESS
    DOES_NOT_OWN_NFT
    DOES_NOT_OWN_PROFILE
    DOES_NOT_FOLLOW_PROFILE
    HAS_NOT_COLLECTED_PUBLICATION
    UNAUTHORIZED_BALANCE
    PROFILE_DOES_NOT_EXIST
    MISSING_ENCRYPTION_PARAMS
    FOLLOW_NOT_FINALISED_ON_CHAIN
    COLLECT_NOT_FINALISED_ON_CHAIN
    CAN_NOT_DECRYPT
  }

  type Comment {
    id: InternalPublicationId!

    profile: Profile!

    stats: PublicationStats!

    metadata: MetadataOutput!

    onChainContentURI: String!

    createdAt: DateTime!

    collectModule: CollectModule!

    referenceModule: ReferenceModule

    appId: Sources

    hidden: Boolean!

    collectNftAddress: ContractAddress

    isGated: Boolean!

    isDataAvailability: Boolean!

    dataAvailabilityProofs: String

    mainPost: MainPostReference!

    commentOn: Publication

    firstComment: Comment

    collectedBy: Wallet

    rankingScore: Float
    reaction(request: ReactionFieldResolverRequest): ReactionTypes
    notInterested(by: ProfileId): Boolean!
    bookmarked(by: ProfileId): Boolean!
    hasCollectedByMe(isFinalisedOnChain: Boolean): Boolean!
    canComment(profileId: ProfileId): CanCommentResponse!
    canMirror(profileId: ProfileId): CanMirrorResponse!
    canDecrypt(
      profileId: ProfileId
      address: EthereumAddress
    ): CanDecryptResponse!
    mirrors(by: ProfileId): [InternalPublicationId!]!
  }

  union MainPostReference = Post | Mirror

  type Mirror {
    id: InternalPublicationId!

    profile: Profile!

    stats: PublicationStats!

    metadata: MetadataOutput!

    onChainContentURI: String!

    createdAt: DateTime!

    collectModule: CollectModule!

    referenceModule: ReferenceModule

    appId: Sources

    hidden: Boolean!

    collectNftAddress: ContractAddress

    isGated: Boolean!

    isDataAvailability: Boolean!

    dataAvailabilityProofs: String

    mirrorOf: MirrorablePublication!
    reaction(request: ReactionFieldResolverRequest): ReactionTypes
    notInterested(by: ProfileId): Boolean!
    bookmarked(by: ProfileId): Boolean!
    hasCollectedByMe(isFinalisedOnChain: Boolean): Boolean!
    canComment(profileId: ProfileId): CanCommentResponse!
    canMirror(profileId: ProfileId): CanMirrorResponse!
    canDecrypt(
      profileId: ProfileId
      address: EthereumAddress
    ): CanDecryptResponse!
  }

  union MirrorablePublication = Post | Comment

  input ExplorePublicationRequest {
    limit: LimitScalar
    cursor: Cursor
    timestamp: TimestampScalar
    sortCriteria: PublicationSortCriteria!

    sources: [Sources!] = []

    publicationTypes: [PublicationTypes!]

    noRandomize: Boolean

    excludeProfileIds: [ProfileId!]
    metadata: PublicationMetadataFilters
    customFilters: [CustomFiltersTypes!] = []
  }

  scalar TimestampScalar

  enum PublicationSortCriteria {
    TOP_COMMENTED
    TOP_COLLECTED
    TOP_MIRRORED
    CURATED_PROFILES
    LATEST
  }

  enum PublicationTypes {
    POST
    COMMENT
    MIRROR
  }

  input PublicationMetadataFilters {
    locale: Locale
    contentWarning: PublicationMetadataContentWarningFilter
    mainContentFocus: [PublicationMainFocus!] = [
      ARTICLE
      AUDIO
      VIDEO
      EMBED
      IMAGE
      LINK
      TEXT_ONLY
    ]
    tags: PublicationMetadataTagsFilter
  }

  input PublicationMetadataContentWarningFilter {
    includeOneOf: [PublicationContentWarning!]
  }

  input PublicationMetadataTagsFilter {
    oneOf: [String!]

    all: [String!]
  }

  type ExploreProfileResult {
    items: [Profile!]!
    pageInfo: PaginatedResultInfo!
  }

  input ExploreProfilesRequest {
    limit: LimitScalar
    cursor: Cursor
    timestamp: TimestampScalar
    sortCriteria: ProfileSortCriteria!
    customFilters: [CustomFiltersTypes!] = []
  }

  enum ProfileSortCriteria {
    CREATED_ON
    MOST_FOLLOWERS
    LATEST_CREATED
    MOST_POSTS
    MOST_COMMENTS
    MOST_MIRRORS
    MOST_PUBLICATION
    MOST_COLLECTS
  }

  type PaginatedFeedResult {
    items: [FeedItem!]!
    pageInfo: PaginatedResultInfo!
  }

  type FeedItem {
    root: FeedItemRoot!

    electedMirror: ElectedMirror

    mirrors: [MirrorEvent!]!

    collects: [CollectedEvent!]!

    reactions: [ReactionEvent!]!

    comments: [Comment!]
  }

  union FeedItemRoot = Post | Comment

  type ElectedMirror {
    mirrorId: InternalPublicationId!
    profile: Profile!
    timestamp: DateTime!
  }

  type MirrorEvent {
    profile: Profile!
    timestamp: DateTime!
  }

  type CollectedEvent {
    profile: Profile!
    timestamp: DateTime!
  }

  type ReactionEvent {
    profile: Profile!
    reaction: ReactionTypes!
    timestamp: DateTime!
  }

  input FeedRequest {
    limit: LimitScalar
    cursor: Cursor

    profileId: ProfileId!

    feedEventItemTypes: [FeedEventItemType!] = [
      POST
      COMMENT
      MIRROR
      COLLECT_POST
      COLLECT_COMMENT
    ]

    sources: [Sources!] = []
    metadata: PublicationMetadataFilters
  }

  enum FeedEventItemType {
    POST
    COMMENT
    MIRROR
    COLLECT_POST
    COLLECT_COMMENT
    REACTION_POST
    REACTION_COMMENT
  }

  type PaginatedTimelineResult {
    items: [Publication!]!
    pageInfo: PaginatedResultInfo!
  }

  input FeedHighlightsRequest {
    limit: LimitScalar
    cursor: Cursor

    profileId: ProfileId!

    sources: [Sources!] = []
    metadata: PublicationMetadataFilters
  }

  type PendingApproveFollowsResult {
    items: [Profile!]!
    pageInfo: PaginatedResultInfo!
  }

  input PendingApprovalFollowsRequest {
    limit: LimitScalar
    cursor: Cursor
  }

  type DoesFollowResponse {
    followerAddress: EthereumAddress!

    profileId: ProfileId!

    follows: Boolean!

    isFinalisedOnChain: Boolean!
  }

  input DoesFollowRequest {
    followInfos: [DoesFollow!]!
  }

  input DoesFollow {
    followerAddress: EthereumAddress!

    profileId: ProfileId!
  }

  type PaginatedFollowingResult {
    items: [Following!]!
    pageInfo: PaginatedResultInfo!
  }

  type Following {
    profile: Profile!
    totalAmountOfTimesFollowing: Int!
  }

  input FollowingRequest {
    limit: LimitScalar
    cursor: Cursor
    address: EthereumAddress!
  }

  type PaginatedFollowersResult {
    items: [Follower!]!
    pageInfo: PaginatedResultInfo!
  }

  type Follower {
    wallet: Wallet!
    totalAmountOfTimesFollowed: Int!
  }

  input FollowersRequest {
    limit: LimitScalar
    cursor: Cursor
    profileId: ProfileId!
  }

  type FollowerNftOwnedTokenIds {
    followerNftAddress: ContractAddress!
    tokensIds: [String!]!
  }

  input FollowerNftOwnedTokenIdsRequest {
    address: EthereumAddress!
    profileId: ProfileId!
  }

  type PaginatedProfileResult {
    items: [Profile!]!
    pageInfo: PaginatedResultInfo!
  }

  input MutualFollowersProfilesQueryRequest {
    limit: LimitScalar
    cursor: Cursor

    viewingProfileId: ProfileId!

    yourProfileId: ProfileId!
  }

  union TransactionResult = TransactionIndexedResult | TransactionError

  type TransactionIndexedResult {
    indexed: Boolean!
    txHash: TxHash!
    txReceipt: TransactionReceipt

    metadataStatus: PublicationMetadataStatus
  }

  type TransactionReceipt {
    to: EthereumAddress
    from: EthereumAddress!
    contractAddress: ContractAddress
    transactionIndex: Int!
    root: String
    gasUsed: String!
    logsBloom: String!
    blockHash: String!
    transactionHash: TxHash!
    logs: [Log!]!
    blockNumber: Int!
    confirmations: Int!
    cumulativeGasUsed: String!
    effectiveGasPrice: String!
    byzantium: Boolean!
    type: Int!
    status: Int
  }

  type Log {
    blockNumber: Int!
    blockHash: String!
    transactionIndex: Int!
    removed: Boolean!
    address: ContractAddress!
    data: String!
    topics: [String!]!
    transactionHash: TxHash!
    logIndex: Int!
  }

  type PublicationMetadataStatus {
    status: PublicationMetadataStatusType!

    reason: String
  }

  enum PublicationMetadataStatusType {
    NOT_FOUND
    PENDING
    METADATA_VALIDATION_FAILED
    SUCCESS
  }

  type TransactionError {
    reason: TransactionErrorReasons!
    txReceipt: TransactionReceipt
  }

  enum TransactionErrorReasons {
    REVERTED
  }

  input HasTxHashBeenIndexedRequest {
    txHash: TxHash

    txId: TxId
  }

  type InternalPinResult {
    referenceItem: Url!
    ipfs: String!
  }

  input InternalPinRequest {
    items: [Url!]!

    secret: String!
  }

  type ApprovedAllowanceAmount {
    currency: ContractAddress!
    module: String!
    contractAddress: ContractAddress!
    allowance: String!
  }

  input ApprovedModuleAllowanceAmountRequest {
    currencies: [ContractAddress!]!
    collectModules: [CollectModules!] = []
    unknownCollectModules: [ContractAddress!] = []
    followModules: [FollowModules!] = []
    unknownFollowModules: [ContractAddress!] = []
    referenceModules: [ReferenceModules!] = []
    unknownReferenceModules: [ContractAddress!] = []
  }

  type GenerateModuleCurrencyApproval {
    to: ContractAddress!
    from: EthereumAddress!
    data: BlockchainData!
  }

  scalar BlockchainData

  input GenerateModuleCurrencyApprovalDataRequest {
    currency: ContractAddress!

    value: String!
    collectModule: CollectModules
    unknownCollectModule: ContractAddress
    followModule: FollowModules
    unknownFollowModule: ContractAddress
    referenceModule: ReferenceModules
    unknownReferenceModule: ContractAddress
  }

  input ProfileFollowModuleBeenRedeemedRequest {
    followProfileId: ProfileId!
    redeemingProfileId: ProfileId!
  }

  type EnabledModules {
    collectModules: [EnabledModule!]!
    followModules: [EnabledModule!]!
    referenceModules: [EnabledModule!]!
  }

  type EnabledModule {
    moduleName: String!
    contractAddress: ContractAddress!
    inputParams: [ModuleInfo!]!
    redeemParams: [ModuleInfo!]!
    returnDataParms: [ModuleInfo!]!
  }

  type ModuleInfo {
    name: String!
    type: String!
  }

  type NftGallery {
    id: NftGalleryId!

    name: String!

    profileId: ProfileId!

    items: [NFT!]!

    createdAt: DateTime!

    updatedAt: DateTime!
  }

  scalar NftGalleryId

  type NFT {
    contractName: String!

    contractAddress: ContractAddress!

    symbol: String!

    tokenId: String!

    owners: [Owner!]!

    name: String!

    description: String!

    contentURI: String!

    originalContent: NFTContent!

    chainId: ChainId!

    collectionName: String!

    ercType: String!
  }

  type Owner {
    amount: Float!

    address: EthereumAddress!
  }

  type NFTContent {
    uri: String!

    metaType: String!

    animatedUrl: String
  }

  input NftGalleriesRequest {
    profileId: ProfileId!
  }

  type NFTsResult {
    items: [NFT!]!
    pageInfo: PaginatedResultInfo!
  }

  input NFTsRequest {
    limit: LimitScalar
    cursor: Cursor

    ownerAddress: EthereumAddress!

    contractAddress: ContractAddress

    includeCollections: [NftCollectionInput!] = []

    excludeCollections: [NftCollectionInput!] = []

    excludeFollowers: Boolean = true

    chainIds: [ChainId!] = [1, 137]
  }

  input NftCollectionInput {
    contractAddress: ContractAddress!

    chainId: ChainId!
  }

  type NftCollectionResult {
    items: [NftCollection!]!
    pageInfo: PaginatedResultInfo!
  }

  type NftCollection {
    contractAddress: ContractAddress!

    name: String!

    symbol: String!

    chainId: ChainId!

    contractType: String!
  }

  input NftCollectionsRequest {
    limit: Float = 50
    cursor: Cursor

    ownerAddress: EthereumAddress
    profileId: ProfileId

    chainIds: [ChainId!] = [1, 137]

    excludeFollowers: Boolean = true
  }

  input NFTSearchRequest {
    limit: LimitScalar
    cursor: Cursor

    query: String!

    profileId: ProfileId

    ownerAddress: EthereumAddress

    chainIds: [ChainId!] = [1, 137]

    excludeFollowers: Boolean = true
  }

  type NftOwnershipChallengeResult {
    id: NftOwnershipId!
    text: String!

    timeout: TimestampScalar!
  }

  scalar NftOwnershipId

  input NftOwnershipChallengeRequest {
    ethereumAddress: EthereumAddress!
    nfts: [NftOwnershipChallenge!]!
  }

  input NftOwnershipChallenge {
    contractAddress: ContractAddress!

    tokenId: String!

    chainId: ChainId!
  }

  type PaginatedNotificationResult {
    items: [Notification!]!
    pageInfo: PaginatedResultInfo!
  }

  union Notification =
      NewFollowerNotification
    | NewCollectNotification
    | NewCommentNotification
    | NewMirrorNotification
    | NewMentionNotification
    | NewReactionNotification

  type NewFollowerNotification {
    notificationId: NotificationId!
    createdAt: DateTime!
    wallet: Wallet!
    isFollowedByMe: Boolean!
  }

  scalar NotificationId

  type NewCollectNotification {
    notificationId: NotificationId!
    createdAt: DateTime!
    wallet: Wallet!
    collectedPublication: Publication!
  }

  type NewCommentNotification {
    notificationId: NotificationId!
    createdAt: DateTime!

    profile: Profile!
    comment: Comment!
  }

  type NewMirrorNotification {
    notificationId: NotificationId!
    createdAt: DateTime!

    profile: Profile!
    publication: MirrorablePublication!
  }

  type NewMentionNotification {
    notificationId: NotificationId!
    createdAt: DateTime!
    mentionPublication: MentionPublication!
  }

  union MentionPublication = Post | Comment

  type NewReactionNotification {
    notificationId: NotificationId!
    createdAt: DateTime!

    profile: Profile!
    reaction: ReactionTypes!
    publication: Publication!
  }

  input NotificationRequest {
    limit: LimitScalar
    cursor: Cursor

    profileId: ProfileId!

    notificationTypes: [NotificationTypes!] = [
      MIRRORED_POST
      MIRRORED_COMMENT
      MENTION_POST
      MENTION_COMMENT
      COMMENTED_COMMENT
      COMMENTED_POST
      COLLECTED_POST
      COLLECTED_COMMENT
      FOLLOWED
      REACTION_POST
      REACTION_COMMENT
    ]

    sources: [Sources!] = []
    customFilters: [CustomFiltersTypes!] = []
    highSignalFilter: Boolean = true
  }

  enum NotificationTypes {
    MIRRORED_POST
    MIRRORED_COMMENT
    MENTION_POST
    MENTION_COMMENT
    COMMENTED_COMMENT
    COMMENTED_POST
    COLLECTED_POST
    COLLECTED_COMMENT
    FOLLOWED
    REACTION_POST
    REACTION_COMMENT
  }

  input ProfileOnChainIdentityRequest {
    profileIds: [ProfileId!]!
  }

  input ProfileQueryRequest {
    limit: LimitScalar
    cursor: Cursor

    profileIds: [ProfileId!]

    ownedBy: [EthereumAddress!]

    handles: [Handle!]

    whoMirroredPublicationId: InternalPublicationId
  }

  input SingleProfileQueryRequest {
    profileId: ProfileId

    handle: Handle
  }

  input RecommendedProfileOptions {
    disableML: Boolean = false

    shuffle: Boolean = false

    profileId: ProfileId
  }

  input DefaultProfileRequest {
    ethereumAddress: EthereumAddress!
  }

  type GlobalProtocolStats {
    totalProfiles: Int!
    totalBurntProfiles: Int!
    totalPosts: Int!
    totalMirrors: Int!
    totalComments: Int!
    totalCollects: Int!
    totalFollows: Int!
    totalRevenue: [Erc20Amount!]!
  }

  type Erc20Amount {
    asset: Erc20!

    value: String!
  }

  input GlobalProtocolStatsRequest {
    fromTimestamp: UnixTimestamp

    toTimestamp: UnixTimestamp

    sources: [Sources!]
  }

  scalar UnixTimestamp

  union ProxyActionStatusResultUnion =
      ProxyActionStatusResult
    | ProxyActionError
    | ProxyActionQueued

  type ProxyActionStatusResult {
    txHash: TxHash!
    txId: TxId!
    status: ProxyActionStatusTypes!
  }

  enum ProxyActionStatusTypes {
    MINTING
    TRANSFERRING
    COMPLETE
  }

  type ProxyActionError {
    reason: String!
    lastKnownTxId: TxId
  }

  type ProxyActionQueued {
    queuedAt: DateTime!
  }

  scalar ProxyActionId

  type PublicationValidateMetadataResult {
    valid: Boolean!

    reason: String
  }

  input ValidatePublicationMetadataRequest {
    metadatav1: PublicationMetadataV1Input
    metadatav2: PublicationMetadataV2Input
  }

  input PublicationMetadataV1Input {
    version: String!

    metadata_id: String!

    appId: Sources

    description: Markdown

    content: Markdown

    external_url: Url

    signatureContext: PublicationSignatureContextInput

    name: String!

    attributes: [MetadataAttributeInput!]!

    image: Url

    imageMimeType: MimeType

    media: [PublicationMetadataMediaInput!]

    animation_url: Url
  }

  input PublicationSignatureContextInput {
    signature: String!
  }

  input MetadataAttributeInput {
    displayType: PublicationMetadataDisplayTypes

    traitType: String!

    value: String!
  }

  input PublicationMetadataMediaInput {
    item: Url!

    type: MimeType

    altTag: String

    cover: Url
    source: PublicationMediaSource = LENS
  }

  enum PublicationMediaSource {
    LENS
  }

  input PublicationMetadataV2Input {
    version: String!

    metadata_id: String!

    appId: Sources

    description: Markdown

    content: Markdown

    external_url: Url

    signatureContext: PublicationSignatureContextInput

    name: String!

    attributes: [MetadataAttributeInput!]!

    image: Url

    imageMimeType: MimeType

    media: [PublicationMetadataMediaInput!]

    animation_url: Url

    locale: Locale!

    tags: [String!]

    contentWarning: PublicationContentWarning

    mainContentFocus: PublicationMainFocus!
  }

  input GetPublicationMetadataStatusRequest {
    publicationId: InternalPublicationId
    txHash: TxHash
    txId: TxId
  }

  type PaginatedPublicationResult {
    items: [Publication!]!
    pageInfo: PaginatedResultInfo!
  }

  input PublicationsQueryRequest {
    limit: LimitScalar
    cursor: Cursor

    profileId: ProfileId

    profileIds: [ProfileId!]

    publicationTypes: [PublicationTypes!]

    commentsOf: InternalPublicationId

    commentsOfOrdering: CommentOrderingTypes = RANKING

    commentsRankingFilter: CommentRankingFilter

    sources: [Sources!] = []

    collectedBy: EthereumAddress

    publicationIds: [InternalPublicationId!]
    metadata: PublicationMetadataFilters
    customFilters: [CustomFiltersTypes!] = []
  }

  enum CommentOrderingTypes {
    DESC
    RANKING
  }

  enum CommentRankingFilter {
    NONE_RELEVANT
    RELEVANT
  }

  input PublicationQueryRequest {
    publicationId: InternalPublicationId

    txHash: TxHash
  }

  type PaginatedWhoCollectedResult {
    items: [Wallet!]!
    pageInfo: PaginatedResultInfo!
  }

  input WhoCollectedPublicationRequest {
    limit: LimitScalar
    cursor: Cursor

    publicationId: InternalPublicationId!
  }

  type PaginatedProfilePublicationsForSaleResult {
    items: [PublicationForSale!]!
    pageInfo: PaginatedResultInfo!
  }

  union PublicationForSale = Post | Comment

  input ProfilePublicationsForSaleRequest {
    limit: LimitScalar
    cursor: Cursor

    profileId: ProfileId!

    sources: [Sources!] = []
    metadata: PublicationMetadataFilters
  }

  type PaginatedAllPublicationsTagsResult {
    items: [TagResult!]!
    pageInfo: PaginatedResultInfo!
  }

  type TagResult {
    tag: PublicationTag!

    total: Int!
  }

  scalar PublicationTag

  input AllPublicationsTagsRequest {
    limit: LimitScalar
    cursor: Cursor
    sort: TagSortCriteria!

    source: Sources
  }

  enum TagSortCriteria {
    MOST_POPULAR
    ALPHABETICAL
  }

  input PublicationsProfileBookmarkedQueryRequest {
    limit: LimitScalar
    cursor: Cursor

    profileId: ProfileId!

    sources: [Sources!] = []
    metadata: PublicationMetadataFilters
  }

  type PaginatedForYouResult {
    items: [Publication!]!
    pageInfo: PaginatedResultInfo!
  }

  input PublicationForYouRequest {
    limit: LimitScalar
    cursor: Cursor
    for: ProfileId!
  }

  type PaginatedWhoReactedResult {
    items: [WhoReactedResult!]!
    pageInfo: PaginatedResultInfo!
  }

  type WhoReactedResult {
    reactionId: ReactionId!

    reaction: ReactionTypes!

    reactionAt: DateTime!
    profile: Profile!
  }

  scalar ReactionId

  input WhoReactedPublicationRequest {
    limit: LimitScalar
    cursor: Cursor

    publicationId: InternalPublicationId!
  }

  type RelayQueueResult {
    relayer: RelayRoleKey!

    address: EthereumAddress!

    queue: Float!
  }

  enum RelayRoleKey {
    CREATE_PROFILE
    DISPATCHER_1
    DISPATCHER_2
    DISPATCHER_3
    DISPATCHER_4
    DISPATCHER_5
    DISPATCHER_6
    DISPATCHER_7
    DISPATCHER_8
    DISPATCHER_9
    DISPATCHER_10
    PROXY_ACTION_COLLECT_1
    PROXY_ACTION_COLLECT_2
    PROXY_ACTION_COLLECT_3
    PROXY_ACTION_COLLECT_4
    PROXY_ACTION_COLLECT_5
    PROXY_ACTION_COLLECT_6
    PROXY_ACTION_FOLLOW_1
    PROXY_ACTION_FOLLOW_2
    PROXY_ACTION_FOLLOW_3
    PROXY_ACTION_FOLLOW_4
    PROXY_ACTION_FOLLOW_5
    PROXY_ACTION_FOLLOW_6
    PROXY_ACTION_FOLLOW_7
    PROXY_ACTION_FOLLOW_8
    PROXY_ACTION_FOLLOW_9
    PROXY_ACTION_FOLLOW_10
    WITH_SIG_1
    WITH_SIG_2
    WITH_SIG_3
    ZK_RELAYER_1
  }

  type ProfilePublicationRevenueResult {
    items: [PublicationRevenue!]!
    pageInfo: PaginatedResultInfo!
  }

  type PublicationRevenue {
    publication: Publication!
    revenue: RevenueAggregate!
  }

  type RevenueAggregate {
    total: Erc20Amount!
  }

  input ProfilePublicationRevenueQueryRequest {
    limit: LimitScalar
    cursor: Cursor

    profileId: ProfileId!

    sources: [Sources!] = []

    types: [PublicationTypes!] = [COMMENT, MIRROR, POST]
    metadata: PublicationMetadataFilters
  }

  input PublicationRevenueQueryRequest {
    publicationId: InternalPublicationId!
  }

  type FollowRevenueResult {
    revenues: [RevenueAggregate!]!
  }

  input ProfileFollowRevenueQueryRequest {
    profileId: ProfileId!
  }

  union SearchResult = PublicationSearchResult | ProfileSearchResult

  type PublicationSearchResult {
    items: [PublicationSearchResultItem!]!
    pageInfo: PaginatedResultInfo!
    type: SearchRequestTypes!
  }

  union PublicationSearchResultItem = Post | Comment

  enum SearchRequestTypes {
    PUBLICATION
    PROFILE
  }

  type ProfileSearchResult {
    items: [Profile!]!
    pageInfo: PaginatedResultInfo!
    type: SearchRequestTypes!
  }

  input SearchQueryRequest {
    limit: LimitScalar
    cursor: Cursor

    query: Search!
    type: SearchRequestTypes!
    customFilters: [CustomFiltersTypes!] = []

    sources: [Sources!] = []
  }

  scalar Search

  type UserSigNonces {
    lensHubOnChainSigNonce: Nonce!
    peripheryOnChainSigNonce: Nonce!
  }

  scalar Nonce

  type Mutation {
    ach(request: AchRequest!): Void
    hel(request: HelRequest!): Void
    gdi(request: GddRequest!): Void
    gci(request: GciRequest!): Void
    gcr(request: GcrRequest!): Void
    dss(request: PrfRequest!): Void
    nni(request: NniRequest!): Void
    nnv(request: NnvRequest!): Void
    createAttachMediaData(request: PublicMediaRequest!): PublicMediaResults!
    authenticate(request: SignedAuthChallenge!): AuthenticationResult!
    refresh(request: RefreshRequest!): AuthenticationResult!
    broadcastDataAvailability(
      request: BroadcastRequest!
    ): BroadcastDataAvailabilityUnion!
    broadcast(request: BroadcastRequest!): RelayResult!
    claim(request: ClaimHandleRequest!): RelayResult!
    idKitPhoneVerifyWebhook(
      request: IdKitPhoneVerifyWebhookRequest!
    ): IdKitPhoneVerifyWebhookResultStatusType!
    createSetDispatcherTypedData(
      options: TypedDataOptions
      request: SetDispatcherRequest!
    ): CreateSetDispatcherBroadcastItemResult!
    createFollowTypedData(
      options: TypedDataOptions
      request: FollowRequest!
    ): CreateFollowBroadcastItemResult!
    createUnfollowTypedData(
      options: TypedDataOptions
      request: UnfollowRequest!
    ): CreateUnfollowBroadcastItemResult!
    createSetFollowModuleTypedData(
      options: TypedDataOptions
      request: CreateSetFollowModuleRequest!
    ): CreateSetFollowModuleBroadcastItemResult!
    createSetFollowNFTUriTypedData(
      options: TypedDataOptions
      request: CreateSetFollowNFTUriRequest!
    ): CreateSetFollowNFTUriBroadcastItemResult!
    createToggleFollowTypedData(
      options: TypedDataOptions
      request: CreateToggleFollowRequest!
    ): CreateToggleFollowBroadcastItemResult!
    createSetFollowNFTUriViaDispatcher(
      request: CreateSetFollowNFTUriRequest!
    ): RelayResult!
    createCollectTypedData(
      options: TypedDataOptions
      request: CreateCollectRequest!
    ): CreateCollectBroadcastItemResult!

    createNftGallery(request: NftGalleryCreateRequest!): NftGalleryId!

    updateNftGalleryInfo(request: NftGalleryUpdateInfoRequest!): Void

    updateNftGalleryOrder(request: NftGalleryUpdateItemOrderRequest!): Void

    updateNftGalleryItems(request: NftGalleryUpdateItemsRequest!): Void

    deleteNftGallery(request: NftGalleryDeleteRequest!): Void

    addProfileInterests(request: AddProfileInterestsRequest!): Void

    removeProfileInterests(request: RemoveProfileInterestsRequest!): Void
    createSetProfileMetadataTypedData(
      options: TypedDataOptions
      request: CreatePublicSetProfileMetadataURIRequest!
    ): CreateSetProfileMetadataURIBroadcastItemResult!
    createSetProfileMetadataViaDispatcher(
      request: CreatePublicSetProfileMetadataURIRequest!
    ): RelayResult!
    createSetDefaultProfileTypedData(
      options: TypedDataOptions
      request: CreateSetDefaultProfileRequest!
    ): SetDefaultProfileBroadcastItemResult!
    dismissRecommendedProfiles(
      request: DismissRecommendedProfilesRequest!
    ): Void
    createSetProfileImageURITypedData(
      options: TypedDataOptions
      request: UpdateProfileImageRequest!
    ): CreateSetProfileImageUriBroadcastItemResult!
    createSetProfileImageURIViaDispatcher(
      request: UpdateProfileImageRequest!
    ): RelayResult!
    createBurnProfileTypedData(
      options: TypedDataOptions
      request: BurnProfileRequest!
    ): CreateBurnProfileBroadcastItemResult!
    proxyAction(request: ProxyActionRequest!): ProxyActionId!
    createDataAvailabilityPostTypedData(
      request: CreateDataAvailabilityPostRequest!
    ): CreatePostBroadcastItemResult!
    createDataAvailabilityCommentTypedData(
      request: CreateDataAvailabilityCommentRequest!
    ): CreateCommentBroadcastItemResult!
    createDataAvailabilityPostViaDispatcher(
      request: CreateDataAvailabilityPostRequest!
    ): RelayDataAvailabilityResult!
    createDataAvailabilityCommentViaDispatcher(
      request: CreateDataAvailabilityCommentRequest!
    ): RelayDataAvailabilityResult!
    createDataAvailabilityMirrorTypedData(
      request: CreateDataAvailabilityMirrorRequest!
    ): CreateMirrorBroadcastItemResult!
    createDataAvailabilityMirrorViaDispatcher(
      request: CreateDataAvailabilityMirrorRequest!
    ): RelayDataAvailabilityResult!
    createMirrorTypedData(
      options: TypedDataOptions
      request: CreateMirrorRequest!
    ): CreateMirrorBroadcastItemResult!
    hidePublication(request: HidePublicationRequest!): Void
    createPostTypedData(
      options: TypedDataOptions
      request: CreatePublicPostRequest!
    ): CreatePostBroadcastItemResult!
    createPostViaDispatcher(request: CreatePublicPostRequest!): RelayResult!
    createCommentTypedData(
      options: TypedDataOptions
      request: CreatePublicCommentRequest!
    ): CreateCommentBroadcastItemResult!
    createCommentViaDispatcher(
      request: CreatePublicCommentRequest!
    ): RelayResult!
    createMirrorViaDispatcher(request: CreateMirrorRequest!): RelayResult!
    addPublicationProfileNotInterested(
      request: PublicationProfileNotInterestedRequest!
    ): Void
    removePublicationProfileNotInterested(
      request: PublicationProfileNotInterestedRequest!
    ): Void
    addPublicationProfileBookmark(
      request: PublicationProfileBookmarkRequest!
    ): Void
    removePublicationProfileBookmark(
      request: PublicationProfileBookmarkRequest!
    ): Void
    addReaction(request: ReactionRequest!): Void
    removeReaction(request: ReactionRequest!): Void
    reportPublication(request: ReportPublicationRequest!): Void
  }

  input AchRequest {
    secret: String!
    ethereumAddress: EthereumAddress!
    handle: CreateHandle
    freeTextHandle: Boolean
    overrideTradeMark: Boolean!
    overrideAlreadyClaimed: Boolean!
  }

  scalar CreateHandle

  input HelRequest {
    secret: String!
    handle: Handle!
    remove: Boolean!
  }

  input GddRequest {
    secret: String!
    domain: Url!
  }

  input GciRequest {
    secret: String!
    hhh: String!
    ttt: String!
  }

  input GcrRequest {
    secret: String!
    hhh: String!
    ttt: String!
  }

  input PrfRequest {
    secret: String!
    hhh: String!
    ss: Boolean!
    dd: Boolean!
  }

  input NniRequest {
    secret: String!
    n: [Nfi!]!
  }

  input Nfi {
    c: ContractAddress!
    i: ChainId!
  }

  input NnvRequest {
    secret: String!
    n: [Nfi!]!
  }

  type PublicMediaResults {
    signedUrl: String!

    media: MediaOutput!
  }

  type MediaOutput {
    item: Url!

    type: MimeType

    altTag: String

    cover: Url
    source: PublicationMediaSource
  }

  input PublicMediaRequest {
    itemCid: IpfsCid!

    type: MimeType

    altTag: String

    cover: Url
  }

  scalar IpfsCid

  type AuthenticationResult {
    accessToken: Jwt!

    refreshToken: Jwt!
  }

  input SignedAuthChallenge {
    address: EthereumAddress!

    signature: Signature!
  }

  scalar Signature

  input RefreshRequest {
    refreshToken: Jwt!
  }

  union BroadcastDataAvailabilityUnion =
      CreateDataAvailabilityPublicationResult
    | RelayError

  type CreateDataAvailabilityPublicationResult {
    id: InternalPublicationId!

    proofs: String!

    dataAvailabilityId: DataAvailabilityId!
  }

  scalar DataAvailabilityId

  type RelayError {
    reason: RelayErrorReasons!
  }

  enum RelayErrorReasons {
    REJECTED
    HANDLE_TAKEN
    EXPIRED
    WRONG_WALLET_SIGNED
    NOT_ALLOWED
  }

  input BroadcastRequest {
    id: BroadcastId!
    signature: Signature!
  }

  scalar BroadcastId

  union RelayResult = RelayerResult | RelayError

  type RelayerResult {
    txHash: TxHash!

    txId: TxId!
  }

  input ClaimHandleRequest {
    id: HandleClaimIdScalar
    freeTextHandle: CreateHandle

    followModule: FollowModuleParams
  }

  input FollowModuleParams {
    feeFollowModule: FeeFollowModuleParams

    profileFollowModule: Boolean

    revertFollowModule: Boolean

    freeFollowModule: Boolean

    unknownFollowModule: UnknownFollowModuleParams
  }

  input FeeFollowModuleParams {
    amount: ModuleFeeAmountParams!

    recipient: EthereumAddress!
  }

  input ModuleFeeAmountParams {
    currency: ContractAddress!

    value: String!
  }

  input UnknownFollowModuleParams {
    contractAddress: ContractAddress!

    data: BlockchainData!
  }

  enum IdKitPhoneVerifyWebhookResultStatusType {
    SUCCESS
    ALREADY_VERIFIED
  }

  input IdKitPhoneVerifyWebhookRequest {
    sharedSecret: String!
    worldcoin: WorldcoinPhoneVerifyWebhookRequest
  }

  input WorldcoinPhoneVerifyWebhookRequest {
    nullifierHash: String!
    signalType: WorldcoinPhoneVerifyType!
    signal: EthereumAddress!
  }

  enum WorldcoinPhoneVerifyType {
    PHONE
    ORB
  }

  type CreateSetDispatcherBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateSetDispatcherEIP712TypedData!
  }

  type CreateSetDispatcherEIP712TypedData {
    types: CreateSetDispatcherEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateSetDispatcherEIP712TypedDataValue!
  }

  type CreateSetDispatcherEIP712TypedDataTypes {
    SetDispatcherWithSig: [EIP712TypedDataField!]!
  }

  type EIP712TypedDataField {
    name: String!

    type: String!
  }

  type EIP712TypedDataDomain {
    name: String!

    chainId: ChainId!

    version: String!

    verifyingContract: ContractAddress!
  }

  type CreateSetDispatcherEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    dispatcher: EthereumAddress!
  }

  input TypedDataOptions {
    overrideSigNonce: Nonce!
  }

  input SetDispatcherRequest {
    profileId: ProfileId!

    dispatcher: EthereumAddress

    enable: Boolean
  }

  type CreateFollowBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateFollowEIP712TypedData!
  }

  type CreateFollowEIP712TypedData {
    types: CreateFollowEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateFollowEIP712TypedDataValue!
  }

  type CreateFollowEIP712TypedDataTypes {
    FollowWithSig: [EIP712TypedDataField!]!
  }

  type CreateFollowEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileIds: [ProfileId!]!
    datas: [BlockchainData!]!
  }

  input FollowRequest {
    follow: [Follow!]!
  }

  input Follow {
    profile: ProfileId!
    followModule: FollowModuleRedeemParams
  }

  input FollowModuleRedeemParams {
    feeFollowModule: FeeFollowModuleRedeemParams

    profileFollowModule: ProfileFollowModuleRedeemParams

    unknownFollowModule: UnknownFollowModuleRedeemParams
  }

  input FeeFollowModuleRedeemParams {
    amount: ModuleFeeAmountParams!
  }

  input ProfileFollowModuleRedeemParams {
    profileId: ProfileId!
  }

  input UnknownFollowModuleRedeemParams {
    data: BlockchainData!
  }

  type CreateUnfollowBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateBurnEIP712TypedData!
  }

  type CreateBurnEIP712TypedData {
    types: CreateBurnEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateBurnEIP712TypedDataValue!
  }

  type CreateBurnEIP712TypedDataTypes {
    BurnWithSig: [EIP712TypedDataField!]!
  }

  type CreateBurnEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    tokenId: String!
  }

  input UnfollowRequest {
    profile: ProfileId!
  }

  type CreateSetFollowModuleBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateSetFollowModuleEIP712TypedData!
  }

  type CreateSetFollowModuleEIP712TypedData {
    types: CreateSetFollowModuleEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateSetFollowModuleEIP712TypedDataValue!
  }

  type CreateSetFollowModuleEIP712TypedDataTypes {
    SetFollowModuleWithSig: [EIP712TypedDataField!]!
  }

  type CreateSetFollowModuleEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    followModule: ContractAddress!
    followModuleInitData: FollowModuleData!
  }

  input CreateSetFollowModuleRequest {
    profileId: ProfileId!

    followModule: FollowModuleParams!
  }

  type CreateSetFollowNFTUriBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateSetFollowNFTUriEIP712TypedData!
  }

  type CreateSetFollowNFTUriEIP712TypedData {
    types: CreateSetFollowNFTUriEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateSetFollowNFTUriEIP712TypedDataValue!
  }

  type CreateSetFollowNFTUriEIP712TypedDataTypes {
    SetFollowNFTURIWithSig: [EIP712TypedDataField!]!
  }

  type CreateSetFollowNFTUriEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    followNFTURI: Url!
  }

  input CreateSetFollowNFTUriRequest {
    profileId: ProfileId!

    followNFTURI: Url
  }

  type CreateToggleFollowBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateToggleFollowEIP712TypedData!
  }

  type CreateToggleFollowEIP712TypedData {
    types: CreateToggleFollowEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateToggleFollowEIP712TypedDataValue!
  }

  type CreateToggleFollowEIP712TypedDataTypes {
    ToggleFollowWithSig: [EIP712TypedDataField!]!
  }

  type CreateToggleFollowEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileIds: [ProfileId!]!
    enables: [Boolean!]!
  }

  input CreateToggleFollowRequest {
    profileIds: [ProfileId!]!
    enables: [Boolean!]!
  }

  type CreateCollectBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateCollectEIP712TypedData!
  }

  type CreateCollectEIP712TypedData {
    types: CreateCollectEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateCollectEIP712TypedDataValue!
  }

  type CreateCollectEIP712TypedDataTypes {
    CollectWithSig: [EIP712TypedDataField!]!
  }

  type CreateCollectEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    pubId: PublicationId!
    data: BlockchainData!
  }

  scalar PublicationId

  input CreateCollectRequest {
    publicationId: InternalPublicationId!

    unknownModuleData: BlockchainData
  }

  input NftGalleryCreateRequest {
    profileId: ProfileId!

    name: NftGalleryName!

    items: [NftInput!]!
  }

  scalar NftGalleryName

  input NftInput {
    contractAddress: ContractAddress!

    tokenId: String!

    chainId: ChainId!
  }

  input NftGalleryUpdateInfoRequest {
    galleryId: NftGalleryId!

    profileId: ProfileId!

    name: NftGalleryName!
  }

  input NftGalleryUpdateItemOrderRequest {
    galleryId: NftGalleryId!

    profileId: ProfileId!

    updates: [NftUpdateItemOrder!]!
  }

  input NftUpdateItemOrder {
    contractAddress: ContractAddress!

    tokenId: String!

    chainId: ChainId!

    newOrder: Int!
  }

  input NftGalleryUpdateItemsRequest {
    galleryId: NftGalleryId!

    profileId: ProfileId!

    toAdd: [NftInput!] = []

    toRemove: [NftInput!] = []
  }

  input NftGalleryDeleteRequest {
    galleryId: NftGalleryId!

    profileId: ProfileId!
  }

  input AddProfileInterestsRequest {
    interests: [ProfileInterest!]!

    profileId: ProfileId!
  }

  input RemoveProfileInterestsRequest {
    interests: [ProfileInterest!]!

    profileId: ProfileId!
  }

  type CreateSetProfileMetadataURIBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateSetProfileMetadataURIEIP712TypedData!
  }

  type CreateSetProfileMetadataURIEIP712TypedData {
    types: CreateSetProfileMetadataURIEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateSetProfileMetadataURIEIP712TypedDataValue!
  }

  type CreateSetProfileMetadataURIEIP712TypedDataTypes {
    SetProfileMetadataURIWithSig: [EIP712TypedDataField!]!
  }

  type CreateSetProfileMetadataURIEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    metadata: Url!
  }

  input CreatePublicSetProfileMetadataURIRequest {
    profileId: ProfileId!

    metadata: Url!
  }

  type SetDefaultProfileBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: SetDefaultProfileEIP712TypedData!
  }

  type SetDefaultProfileEIP712TypedData {
    types: SetDefaultProfileEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: SetDefaultProfileEIP712TypedDataValue!
  }

  type SetDefaultProfileEIP712TypedDataTypes {
    SetDefaultProfileWithSig: [EIP712TypedDataField!]!
  }

  type SetDefaultProfileEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    wallet: EthereumAddress!
    profileId: ProfileId!
  }

  input CreateSetDefaultProfileRequest {
    profileId: ProfileId!
  }

  input DismissRecommendedProfilesRequest {
    profileIds: [ProfileId!]!
  }

  type CreateSetProfileImageUriBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateSetProfileImageUriEIP712TypedData!
  }

  type CreateSetProfileImageUriEIP712TypedData {
    types: CreateSetProfileImageUriEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateSetProfileImageUriEIP712TypedDataValue!
  }

  type CreateSetProfileImageUriEIP712TypedDataTypes {
    SetProfileImageURIWithSig: [EIP712TypedDataField!]!
  }

  type CreateSetProfileImageUriEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    imageURI: Url!
  }

  input UpdateProfileImageRequest {
    profileId: ProfileId!

    url: Url

    nftData: NFTData
  }

  input NFTData {
    id: NftOwnershipId!

    signature: Signature!
  }

  type CreateBurnProfileBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateBurnEIP712TypedData!
  }

  input BurnProfileRequest {
    profileId: ProfileId!
  }

  input ProxyActionRequest {
    follow: FollowProxyAction
    collect: CollectProxyAction
  }

  input FollowProxyAction {
    freeFollow: FreeFollowProxyAction
  }

  input FreeFollowProxyAction {
    profileId: ProfileId!
  }

  input CollectProxyAction {
    freeCollect: FreeCollectProxyAction
  }

  input FreeCollectProxyAction {
    publicationId: InternalPublicationId!
  }

  type CreatePostBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreatePostEIP712TypedData!
  }

  type CreatePostEIP712TypedData {
    types: CreatePostEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreatePostEIP712TypedDataValue!
  }

  type CreatePostEIP712TypedDataTypes {
    PostWithSig: [EIP712TypedDataField!]!
  }

  type CreatePostEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: PublicationUrl!
    collectModule: ContractAddress!
    collectModuleInitData: CollectModuleData!
    referenceModule: ContractAddress!
    referenceModuleInitData: ReferenceModuleData!
  }

  scalar PublicationUrl

  input CreateDataAvailabilityPostRequest {
    from: ProfileId!

    contentURI: Url!
  }

  type CreateCommentBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateCommentEIP712TypedData!
  }

  type CreateCommentEIP712TypedData {
    types: CreateCommentEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateCommentEIP712TypedDataValue!
  }

  type CreateCommentEIP712TypedDataTypes {
    CommentWithSig: [EIP712TypedDataField!]!
  }

  type CreateCommentEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    contentURI: PublicationUrl!
    profileIdPointed: ProfileId!
    pubIdPointed: PublicationId!
    collectModule: ContractAddress!
    collectModuleInitData: CollectModuleData!
    referenceModule: ContractAddress!
    referenceModuleInitData: ReferenceModuleData!
    referenceModuleData: ReferenceModuleData!
  }

  input CreateDataAvailabilityCommentRequest {
    from: ProfileId!

    commentOn: InternalPublicationId!

    contentURI: Url!
  }

  union RelayDataAvailabilityResult =
      CreateDataAvailabilityPublicationResult
    | RelayError

  type CreateMirrorBroadcastItemResult {
    id: BroadcastId!

    expiresAt: DateTime!

    typedData: CreateMirrorEIP712TypedData!
  }

  type CreateMirrorEIP712TypedData {
    types: CreateMirrorEIP712TypedDataTypes!

    domain: EIP712TypedDataDomain!

    value: CreateMirrorEIP712TypedDataValue!
  }

  type CreateMirrorEIP712TypedDataTypes {
    MirrorWithSig: [EIP712TypedDataField!]!
  }

  type CreateMirrorEIP712TypedDataValue {
    nonce: Nonce!
    deadline: UnixTimestamp!
    profileId: ProfileId!
    profileIdPointed: ProfileId!
    pubIdPointed: PublicationId!
    referenceModuleData: ReferenceModuleData!
    referenceModule: ContractAddress!
    referenceModuleInitData: ReferenceModuleData!
  }

  input CreateDataAvailabilityMirrorRequest {
    from: ProfileId!

    mirror: InternalPublicationId!
  }

  input CreateMirrorRequest {
    profileId: ProfileId!

    publicationId: InternalPublicationId!

    referenceModule: ReferenceModuleParams
  }

  input ReferenceModuleParams {
    followerOnlyReferenceModule: Boolean

    unknownReferenceModule: UnknownReferenceModuleParams

    degreesOfSeparationReferenceModule: DegreesOfSeparationReferenceModuleParams
  }

  input UnknownReferenceModuleParams {
    contractAddress: ContractAddress!

    data: BlockchainData!
  }

  input DegreesOfSeparationReferenceModuleParams {
    commentsRestricted: Boolean!

    mirrorsRestricted: Boolean!

    degreesOfSeparation: Int!
  }

  input HidePublicationRequest {
    publicationId: InternalPublicationId!
  }

  input CreatePublicPostRequest {
    profileId: ProfileId!

    contentURI: Url!

    collectModule: CollectModuleParams!

    referenceModule: ReferenceModuleParams

    gated: GatedPublicationParamsInput
  }

  input CollectModuleParams {
    freeCollectModule: FreeCollectModuleParams

    revertCollectModule: Boolean

    feeCollectModule: FeeCollectModuleParams

    limitedFeeCollectModule: LimitedFeeCollectModuleParams

    limitedTimedFeeCollectModule: LimitedTimedFeeCollectModuleParams

    timedFeeCollectModule: TimedFeeCollectModuleParams

    multirecipientFeeCollectModule: MultirecipientFeeCollectModuleParams

    aaveFeeCollectModule: AaveFeeCollectModuleParams

    erc4626FeeCollectModule: ERC4626FeeCollectModuleParams

    simpleCollectModule: SimpleCollectModuleParams

    unknownCollectModule: UnknownCollectModuleParams
  }

  input FreeCollectModuleParams {
    followerOnly: Boolean!
  }

  input FeeCollectModuleParams {
    amount: ModuleFeeAmountParams!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!
  }

  input LimitedFeeCollectModuleParams {
    collectLimit: String!

    amount: ModuleFeeAmountParams!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!
  }

  input LimitedTimedFeeCollectModuleParams {
    collectLimit: String!

    amount: ModuleFeeAmountParams!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!
  }

  input TimedFeeCollectModuleParams {
    amount: ModuleFeeAmountParams!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!
  }

  input MultirecipientFeeCollectModuleParams {
    amount: ModuleFeeAmountParams!

    collectLimit: String

    referralFee: Float = 0

    followerOnly: Boolean!

    endTimestamp: DateTime

    recipients: [RecipientDataInput!]!
  }

  input RecipientDataInput {
    recipient: EthereumAddress!

    split: Float!
  }

  input AaveFeeCollectModuleParams {
    collectLimit: String

    amount: ModuleFeeAmountParams!

    recipient: EthereumAddress!

    referralFee: Float!

    followerOnly: Boolean!

    endTimestamp: DateTime
  }

  input ERC4626FeeCollectModuleParams {
    collectLimit: String

    amount: ModuleFeeAmountParams!

    vault: ContractAddress!

    recipient: EthereumAddress!

    referralFee: Float = 0

    followerOnly: Boolean!

    endTimestamp: DateTime
  }

  input SimpleCollectModuleParams {
    fee: ModuleFeeParams

    collectLimit: String

    followerOnly: Boolean!

    endTimestamp: DateTime
  }

  input ModuleFeeParams {
    amount: ModuleFeeAmountParams!

    recipient: EthereumAddress!

    referralFee: Float!
  }

  input UnknownCollectModuleParams {
    contractAddress: ContractAddress!

    data: BlockchainData!
  }

  input GatedPublicationParamsInput {
    nft: NftOwnershipInput

    token: Erc20OwnershipInput

    eoa: EoaOwnershipInput

    profile: ProfileOwnershipInput

    follow: FollowConditionInput

    collect: CollectConditionInput

    and: AndConditionInput

    or: OrConditionInput

    encryptedSymmetricKey: ContentEncryptionKey!
  }

  input NftOwnershipInput {
    contractAddress: ContractAddress!

    chainID: ChainId!

    contractType: ContractType!

    tokenIds: [TokenId!] = []
  }

  input Erc20OwnershipInput {
    contractAddress: ContractAddress!

    chainID: ChainId!

    amount: String!

    decimals: Float!

    condition: ScalarOperator!
  }

  input EoaOwnershipInput {
    address: EthereumAddress!
  }

  input ProfileOwnershipInput {
    profileId: ProfileId!
  }

  input FollowConditionInput {
    profileId: ProfileId!
  }

  input CollectConditionInput {
    publicationId: InternalPublicationId

    thisPublication: Boolean
  }

  input AndConditionInput {
    criteria: [AccessConditionInput!]!
  }

  input AccessConditionInput {
    nft: NftOwnershipInput

    token: Erc20OwnershipInput

    eoa: EoaOwnershipInput

    profile: ProfileOwnershipInput

    follow: FollowConditionInput

    collect: CollectConditionInput

    and: AndConditionInput

    or: OrConditionInput
  }

  input OrConditionInput {
    criteria: [AccessConditionInput!]!
  }

  input CreatePublicCommentRequest {
    profileId: ProfileId!

    publicationId: InternalPublicationId!

    contentURI: Url!

    collectModule: CollectModuleParams!

    referenceModule: ReferenceModuleParams

    gated: GatedPublicationParamsInput
  }

  input PublicationProfileNotInterestedRequest {
    profileId: ProfileId!

    publicationId: InternalPublicationId!
  }

  input PublicationProfileBookmarkRequest {
    profileId: ProfileId!

    publicationId: InternalPublicationId!
  }

  input ReactionRequest {
    profileId: ProfileId!

    reaction: ReactionTypes!

    publicationId: InternalPublicationId!
  }

  input ReportPublicationRequest {
    publicationId: InternalPublicationId!
    reason: ReportingReasonInputParams!
    additionalComments: String
  }

  input ReportingReasonInputParams {
    sensitiveReason: SensitiveReasonInputParams
    illegalReason: IllegalReasonInputParams
    fraudReason: FraudReasonInputParams
    spamReason: SpamReasonInputParams
  }

  input SensitiveReasonInputParams {
    reason: PublicationReportingReason!
    subreason: PublicationReportingSensitiveSubreason!
  }

  enum PublicationReportingReason {
    SENSITIVE
    ILLEGAL
    FRAUD
    SPAM
  }

  enum PublicationReportingSensitiveSubreason {
    NSFW
    OFFENSIVE
  }

  input IllegalReasonInputParams {
    reason: PublicationReportingReason!
    subreason: PublicationReportingIllegalSubreason!
  }

  enum PublicationReportingIllegalSubreason {
    ANIMAL_ABUSE
    HUMAN_ABUSE
    VIOLENCE
    THREAT_INDIVIDUAL
    DIRECT_THREAT
  }

  input FraudReasonInputParams {
    reason: PublicationReportingReason!
    subreason: PublicationReportingFraudSubreason!
  }

  enum PublicationReportingFraudSubreason {
    SCAM
    IMPERSONATION
  }

  input SpamReasonInputParams {
    reason: PublicationReportingReason!
    subreason: PublicationReportingSpamSubreason!
  }

  enum PublicationReportingSpamSubreason {
    MISLEADING
    MISUSE_HASHTAGS
    UNRELATED
    REPETITIVE
    FAKE_ENGAGEMENT
    MANIPULATION_ALGO
    LOW_SIGNAL
    SOMETHING_ELSE
  }

  type Subscription {
    newDataAvailabilityTransaction: DataAvailabilityTransactionUnion!
  }
`;

export default typeDefs;
