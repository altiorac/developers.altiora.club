import { Cursor } from "motion-plus/react"

export default function CursorDefaultSettings() {
    return (
        <div style={container}>
            <Cursor
                style={cursor}
            />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const cursor: React.CSSProperties = {
    backgroundColor: "#ffffff",
    mixBlendMode: "difference",
}

const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
    maxWidth: 400,
    color: "#0f1115",
    gap: 50,
}
