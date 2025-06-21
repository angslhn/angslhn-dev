"use client"

import { useContext } from "react"
import { AppContext } from "@/contexts/AppContext"

import { App } from "@/libs/types"

export const useApp = (): App => useContext(AppContext)