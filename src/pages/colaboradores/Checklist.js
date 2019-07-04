import React, {useEffect} from 'react';
import CardBorda from "../../components/card/CardBorda";
import {connect} from "react-redux";
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import {loadList, update} from "../../store/actions/serverActions";

let Checklist = ({id, loadData, update, values, ...props}) => {

    const submit = value => {
    }

    useEffect(() => {
        loadData(`checklists/colaborador/${id}`, 'checkLists')
    }, [])

    const renderCheckList = () => {
        return values && values.length ?
            values.map((x, i) => {
                    return <div key={i} style={{width: '100%'}}>
                        <Checkbox label={x.nome} value={x.concluido} onChange={v => update({...x, concluido: v})}/>
                        <Divided/>
                    </div>
                }
            ) : null
    }


    return (
        <CardBorda title={'Checklist'} style={{marginTop: '7rem'}}>
            {renderCheckList()}
        </CardBorda>
    );
};

const mapStateToProps = state => ({
    values: state.serverValues.checkLists
})

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    update: value => dispatch(update('checklists', value, {list: true})),
})


export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
