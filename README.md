## install

yarn add hf-livechat

## component

```javascript
<LiveChatButton>
```

## features

- support 客製化 button。

## API

- license : livechat license ID
- group: livechat group

## CSS

- livechat_button: 可以更改 background 更改 button 的圖片。

## Demo

```javascript
import React from "react";
import LiveChatButton from "./LiveChatButton";

function App() {
  return (
    <div className="App">
      <LiveChatButton license={/*YOUR LICNESE*/} group={14} />
    </div>
  );
}

export default App;
```
