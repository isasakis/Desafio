import React, { Fragment, Component } from 'react';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import TabelaPessoa from './TabelaPessoa';
import Grid from '@material-ui/core/Grid';
import CreatePessoa from './Create';

class Pessoas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pessoas: [],
      loading: true
    }
  }

  async getData() {
    try {
      let route = '/api/pessoas/';
      const res = await axios.get(route);
      this.setState({
        pessoas: res.data,
        loading: false
      })
    } catch (err) {
      console.log(err.response.statusText);
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return this.state.loading ? (
      <Fragment>
        <p>Aguarde enquanto os cadastros de pessoas estão sendo carregados</p>
        <LinearProgress />
      </Fragment>
    ) : (
        <Fragment>
          <Grid container direction="row" justify="center" alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <h1>Gerenciamento de cadastros de pessoas</h1>
            </Grid>
            <Grid item xs={6}>
              <CreatePessoa />
            </Grid>
            <Grid item xs={6}>
              <h2>Lista de pessoas cadastradas</h2>
              {this.state.pessoas && this.state.pessoas.length > 0 ? (
                <TabelaPessoa pessoas={this.state.pessoas} />
              ) : (
                  <Fragment>
                    <p>Nenhuma pessoa cadastrada.</p>
                  </Fragment>
                )}
            </Grid>

          </Grid>
        </Fragment>
      )
  }
}

export default Pessoas;