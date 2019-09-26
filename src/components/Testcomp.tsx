import * as React from 'react'

inteface IProps {
    first:String
}

export default class Testcomp extends React.Component <Iprops,any> {
    render() {
        return (
            <div>
                <strong>Hello there</strong>
            </div>
        )
    }
}
