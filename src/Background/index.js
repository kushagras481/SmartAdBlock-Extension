import 'emoji-log'
import browser from 'webextension-polyfill'

import { wrapStore } from 'webext-redux'
import store from './Redux/Store'

wrapStore(store)

browser.runtime.onInstalled.addListener(() => {
  console.emoji('☕️', 'extension installed')
})
