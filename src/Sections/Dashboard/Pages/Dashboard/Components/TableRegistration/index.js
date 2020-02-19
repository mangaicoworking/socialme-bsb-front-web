import React, { useState } from 'react';

const TableRegistration = () => {
    return (
        <div class="table-responsive text-center">
            <table class="table align-items-center table-flush table-striped">
                <thead class="thead-light">
                    <tr>
                        <th></th>
                        <th>Sistema</th>
                        <th>Total de Cadastros</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td class="table-user">
                            <img style={{ width: '32px', height: '32px', float: 'right' }} src="/assets/img/theme/userCache.jpg" class="avatar rounded-circle mr-3" alt="..." />
                        </td>
                        <td class="table-user">
                            <b>Cache</b>
                        </td>
                        <td>
                            <span>109.000</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-user">
                            <img style={{ width: '32px', height: '32px', float: 'right' }} src="/assets/img/theme/userMV.jpg" class="avatar rounded-circle mr-3" alt="..." />
                        </td>
                        <td class="table-user">
                            <b>MV</b>
                        </td>
                        <td>
                            <span>5.100.000</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-user">
                            <img style={{ width: '32px', height: '32px', float: 'right' }} src="/assets/img/theme/userProntuario.jpg" class="avatar rounded-circle mr-3" alt="..." />
                        </td>
                        <td class="table-user">
                            <b>Indivíduos únicos</b>
                        </td>
                        <td>
                            <span>3.200.000</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="table-user">
                        </td>
                        <td class="table-user">
                            <b>Total</b>
                        </td>
                        <td>
                            <span><strong>3.200.000</strong></span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default TableRegistration;