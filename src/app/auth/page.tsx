'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import React from 'react';
import { Database } from '../api/auth/interfaces';
import { AuthResponse } from '../api/auth/route';
import axios, { AxiosResponse } from 'axios';

const redirectUri = 'https://kkirook.vercel.app/auth';

export default function Auth() {
  const params = useSearchParams();
  const code = params.get('code');

  const handlePost = async () => {
    if (!code) {
      alert('no code');
      return;
    }

    const res = await axios.post<any, AxiosResponse<any>>('/api/auth', {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    });

    const { accessToken, pageId } = res.data;
    if (accessToken) {
      alert('성공했습니다');
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('page_id', pageId);

      const res = await axios.get(`/api/db/${pageId}`, {
        headers: {
          Authorization: accessToken,
        },
      });

      console.log(res.data);
    }
    // TODO:
    /**
     * access_token 등으로 todolist 추가하는 로직
     */
  };

  const setDatabase = (databases: Database[]) => {
    databases.forEach((db) => {
      switch (db.title) {
        case 'todo':
          localStorage.setItem('todo', db.id);
          return;
        case 'memo':
          localStorage.setItem('memo', db.id);
          return;
        case 'link':
          localStorage.setItem('link', db.id);
          return;
        default:
          return;
      }
    });
  };

  // useEffect(() => {
  //   console.log('effect', code);
  //   handlePost();
  // }, [code]);

  return (
    <section className='h-full w-full p-6'>
      <div>auth succeed</div>
      <button onClick={handlePost}>click</button>
    </section>
  );
}
