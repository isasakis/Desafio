import React, { Fragment, Component } from 'react';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import TabelaPessoa from './TabelaPessoa';
import Grid from '@material-ui/core/Grid';
import socket from 'socket.io-client';
import FloatingActionButton from '../layout/FloatingActionButton';

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
    this.subscribeToEvents();
    this.getData();
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:5000', { transports: ['websocket'] });

    io.on('pessoa', data => {
      this.setState({ pessoas: [data, ...this.state.pessoas] })
    })
    io.on('pessoas', data => {
      this.setState({ pessoas: data })
    })
    io.on('pessoaUpdate', data => {
      this.setState({
        pessoas: this.state.pessoas.map(pessoa => {
          return pessoa._id === data._id ? data : pessoa
        })
      })
    })
  }


  render() {
    return (
      <Fragment>
        <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <h2>Pessoas cadastradas</h2>
            {this.state.loading ? (
              <Fragment>
                <p>Aguarde enquanto os cadastros de pessoas estão sendo carregados</p>
                <LinearProgress />
              </Fragment>
            ) :
              (this.state.pessoas && this.state.pessoas.length > 0 ? (
                <TabelaPessoa pessoas={this.state.pessoas} />
              ) : (
                  <Fragment>
                    <p>Nenhuma pessoa cadastrada.</p>
                  </Fragment>
                )
              )}
          </Grid>
        </Grid>
        <FloatingActionButton />
      </Fragment>
    )
  }
}

export default Pessoas;