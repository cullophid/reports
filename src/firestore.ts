import firebase from "./firebase"
import { Report, DataSource, SlideElement, Slide } from "./models"
export interface Document<Data> {
  readonly exists: boolean
  readonly ref: DocumentReference<Data>
  readonly id: string
  readonly metadata: firebase.firestore.SnapshotMetadata
  data(options?: firebase.firestore.SnapshotOptions): Data | undefined
  get(
    fieldPath: string | firebase.firestore.FieldPath,
    options?: firebase.firestore.SnapshotOptions
  ): any
  isEqual(other: Document<Data>): boolean
}

export interface DocumentReference<Data> {
  readonly id: string
  readonly firestore: Firestore
  readonly parent: CollectionReference<Data>
  readonly path: string
  collection(collectionPath: string): CollectionReference<Data>
  isEqual(other: DocumentReference<Data>): boolean
  set(data: Data, options?: firebase.firestore.SetOptions): Promise<void>
  update(data: Partial<Data>): Promise<void>
  update(
    field: string | firebase.firestore.FieldPath,
    value: any,
    ...moreFieldsAndValues: any[]
  ): Promise<void>
  delete(): Promise<void>
  get(options?: firebase.firestore.GetOptions): Promise<Document<Data>>
  onSnapshot(observer: {
    next?: (snapshot: Document<Data>) => void
    error?: (error: firebase.firestore.FirestoreError) => void
    complete?: () => void
  }): () => void
  onSnapshot(
    options: firebase.firestore.SnapshotListenOptions,
    observer: {
      next?: (snapshot: Document<Data>) => void
      error?: (error: Error) => void
      complete?: () => void
    }
  ): () => void
  onSnapshot(
    onNext: (snapshot: Document<Data>) => void,
    onError?: (error: Error) => void,
    onCompletion?: () => void
  ): () => void

  onSnapshot(
    options: firebase.firestore.SnapshotListenOptions,
    onNext: (snapshot: Document<Data>) => void,
    onError?: (error: Error) => void,
    onCompletion?: () => void
  ): () => void
}

export interface CollectionReference<Data> extends Query<Data> {
  readonly id: string
  readonly parent: DocumentReference<Data> | null
  readonly path: string
  doc<DocData = Data>(documentPath?: string): DocumentReference<DocData>
  add(data: Data): Promise<DocumentReference<Data>>
  isEqual(other: CollectionReference<Data>): boolean
}

export interface Query<Data> {
  readonly firestore: Firestore

  where(
    fieldPath: string | firebase.firestore.FieldPath,
    opStr: firebase.firestore.WhereFilterOp,
    value: any
  ): Query<Data>

  orderBy(
    fieldPath: string | firebase.firestore.FieldPath,
    directionStr?: firebase.firestore.OrderByDirection
  ): Query<Data>

  limit(limit: number): Query<Data>

  startAt(snapshot: Document<Data>): Query<Data>

  startAt(...fieldValues: any[]): Query<Data>

  startAfter(snapshot: Document<Data>): Query<Data>

  startAfter(...fieldValues: any[]): Query<Data>

  endBefore(snapshot: Document<Data>): Query<Data>

  endBefore(...fieldValues: any[]): Query<Data>

  endAt(snapshot: Document<Data>): Query<Data>

  endAt(...fieldValues: any[]): Query<Data>

  isEqual(other: Query<Data>): boolean

  get(options?: firebase.firestore.GetOptions): Promise<QuerySnapshot<Data>>

  onSnapshot(observer: {
    next?: (snapshot: QuerySnapshot<Data>) => void
    error?: (error: Error) => void
    complete?: () => void
  }): () => void

  onSnapshot(
    options: firebase.firestore.SnapshotListenOptions,
    observer: {
      next?: (snapshot: QuerySnapshot<Data>) => void
      error?: (error: Error) => void
      complete?: () => void
    }
  ): () => void

  onSnapshot(
    onNext: (snapshot: QuerySnapshot<Data>) => void,
    onError?: (error: Error) => void,
    onCompletion?: () => void
  ): () => void

  onSnapshot(
    options: firebase.firestore.SnapshotListenOptions,
    onNext: (snapshot: QuerySnapshot<Data>) => void,
    onError?: (error: Error) => void,
    onCompletion?: () => void
  ): () => void
}

export interface QuerySnapshot<Data> {
  readonly query: Query<Data>
  readonly metadata: firebase.firestore.SnapshotMetadata
  readonly docs: QueryDocumentSnapshot<Data>[]
  readonly size: number
  readonly empty: boolean

  docChanges(
    options?: firebase.firestore.SnapshotListenOptions
  ): DocumentChange<Data>[]

  forEach(
    callback: (result: QueryDocumentSnapshot<Data>) => void,
    thisArg?: any
  ): void

  isEqual(other: QuerySnapshot<Data>): boolean
}

export interface DocumentChange<Data> {
  readonly type: firebase.firestore.DocumentChangeType
  readonly doc: QueryDocumentSnapshot<Data>
  readonly oldIndex: number
  readonly newIndex: number
}

export interface QueryDocumentSnapshot<Data> extends Document<Data> {
  data(options?: firebase.firestore.SnapshotOptions): Data
}

export interface Firestore {
  settings(settings: firebase.firestore.Settings): void

  enablePersistence(
    settings?: firebase.firestore.PersistenceSettings
  ): Promise<void>
  collection<Data>(collectionPath: string): CollectionReference<Data>
  doc<Data>(documentPath: string): DocumentReference<Data>
  runTransaction<T>(
    updateFunction: (transaction: firebase.firestore.Transaction) => Promise<T>
  ): Promise<T>
  batch(): firebase.firestore.WriteBatch
  app: firebase.app.App
  enableNetwork(): Promise<void>
  disableNetwork(): Promise<void>
}

const firestore = firebase.firestore() as Firestore

export const reportsCollection = firestore.collection<Report>("reports")
export const slidesCollection = firestore.collection<Slide>("slides")
export const SlideElementsCollection = firestore.collection<SlideElement>(
  "slideElements"
)
export const dataSourcesCollection = firestore.collection<DataSource>(
  "datasources"
)
