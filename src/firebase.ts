import { useState, useEffect, useCallback } from "react"
import firebase, { firestore } from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import { navigateTo } from "gatsby"

const config = {
  apiKey: "AIzaSyB-yNwOSChS7cSINcrAvBahGlNaHMmaIN8",
  authDomain: "andreas-reports.firebaseapp.com",
  databaseURL: "https://andreas-reports.firebaseio.com",
  projectId: "andreas-reports",
  storageBucket: "andreas-reports.appspot.com",
  messagingSenderId: "286867092487",
}

firebase.initializeApp(config)
;(window as any).firebase = firebase

export const useSession = () => {
  const [session, setSession] = useState<firebase.User | null>(null)

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setSession(user)
      } else {
        navigateTo("/login")
      }
    })
  }, [])
  return session
}
