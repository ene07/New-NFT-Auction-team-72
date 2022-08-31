// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  
  const NFT_owner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v557, v558, v559, v560] = svs;
      return (await ((async () => {
        
        
        return v557;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v557, v558, v728, v729] = svs;
      return (await ((async () => {
        
        
        return v557;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v557, v558, v726, v727, v728, v729, v730, v737] = svs;
      return (await ((async () => {
        
        
        return v557;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v557, v558, v559, v581, v582, v583, v590] = svs;
      return (await ((async () => {
        
        
        return v557;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      NFT: {
        owner: {
          decode: NFT_owner,
          dom: [],
          rng: ctc0
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2],
      4: [ctc0, ctc1, ctc2, ctc0],
      6: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc0, ctc2, ctc2],
      7: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Auctioneer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    deadline: ctc1,
    nftId: ctc4
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Buyer_optIn0_59: ctc6,
    Buyer_submitBid0_59: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc10, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v552 = stdlib.protect(ctc5, await interact.getAuctionProps(), {
    at: './index.rsh:42:67:application',
    fs: ['at ./index.rsh:41:18:application call to [unknown function] (defined at: ./index.rsh:41:22:function exp)'],
    msg: 'getAuctionProps',
    who: 'Auctioneer'
    });
  const v553 = v552.deadline;
  const v554 = v552.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v554, v553],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v558, v559], secs: v561, time: v560, didSend: v32, from: v557 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v558
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v558, v559], secs: v561, time: v560, didSend: v32, from: v557 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v557, v558, v559, v560],
    evt_cnt: 0,
    funcNum: 1,
    lct: v560,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:14:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '1'), v558]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v568, time: v567, didSend: v39, from: v566 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v558
        });
      
      const v581 = stdlib.safeAdd(v560, v559);
      const v582 = stdlib.checkedBigNumberify('./index.rsh:60:19:decimal', stdlib.UInt_max, '0');
      const v583 = v567;
      const v584 = v560;
      const v590 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v595 = stdlib.le(v584, v581);
        
        return v595;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        const v726 = stdlib.safeAdd(v584, v559);
        const v727 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
        const v728 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
        const v729 = v557;
        const v730 = v583;
        const v731 = v584;
        const v737 = v590;
        
        if (await (async () => {
          const v742 = stdlib.le(v731, v726);
          
          return v742;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v729,
            tok: v558
            });
          sim_r.txns.push({
            kind: 'from',
            to: v557,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v568, time: v567, didSend: v39, from: v566 } = txn2;
  ;
  ;
  const v575 = stdlib.addressEq(v557, v566);
  stdlib.assert(v575, {
    at: './index.rsh:50:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Auctioneer'
    });
  stdlib.protect(ctc0, await interact.getBids(), {
    at: './index.rsh:52:30:application',
    fs: ['at ./index.rsh:52:30:application call to [unknown function] (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:52:30:application call to "liftedInteract" (defined at: ./index.rsh:52:30:application)'],
    msg: 'getBids',
    who: 'Auctioneer'
    });
  
  const v581 = stdlib.safeAdd(v560, v559);
  let v582 = stdlib.checkedBigNumberify('./index.rsh:60:19:decimal', stdlib.UInt_max, '0');
  let v583 = v567;
  let v584 = v560;
  let v590 = stdlib.checkedBigNumberify('./index.rsh:38:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v595 = stdlib.le(v584, v581);
    
    return v595;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc8],
      timeoutAt: ['time', v581],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v557, v558, v559, v581, v582, v583, v590],
        evt_cnt: 0,
        funcNum: 8,
        lct: v583,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:82:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v719, time: v718, didSend: v285, from: v717 } = txn4;
          
          ;
          
          const cv582 = v582;
          const cv583 = v718;
          const cv584 = v583;
          const cv590 = v590;
          
          await (async () => {
            const v582 = cv582;
            const v583 = cv583;
            const v584 = cv584;
            const v590 = cv590;
            
            if (await (async () => {
              const v595 = stdlib.le(v584, v581);
              
              return v595;})()) {
              sim_r.isHalt = false;
              }
            else {
              
              const v726 = stdlib.safeAdd(v584, v559);
              const v727 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
              const v728 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
              const v729 = v557;
              const v730 = v583;
              const v731 = v584;
              const v737 = v590;
              
              if (await (async () => {
                const v742 = stdlib.le(v731, v726);
                
                return v742;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v729,
                  tok: v558
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v557,
                  tok: undefined /* Nothing */
                  });
                sim_r.isHalt = false;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc10, ctc4, ctc1, ctc1, ctc1, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v719, time: v718, didSend: v285, from: v717 } = txn4;
      ;
      const v720 = stdlib.addressEq(v557, v717);
      stdlib.assert(v720, {
        at: './index.rsh:82:19:dot',
        fs: ['at ./index.rsh:81:40:application call to [unknown function] (defined at: ./index.rsh:81:40:function exp)'],
        msg: 'sender correct',
        who: 'Auctioneer'
        });
      stdlib.protect(ctc0, await interact.showTimeout(), {
        at: './index.rsh:83:43:application',
        fs: ['at ./index.rsh:83:43:application call to [unknown function] (defined at: ./index.rsh:83:43:function exp)', 'at ./index.rsh:83:43:application call to "liftedInteract" (defined at: ./index.rsh:83:43:application)', 'at ./index.rsh:81:40:application call to [unknown function] (defined at: ./index.rsh:81:40:function exp)'],
        msg: 'showTimeout',
        who: 'Auctioneer'
        });
      
      const cv582 = v582;
      const cv583 = v718;
      const cv584 = v583;
      const cv590 = v590;
      
      v582 = cv582;
      v583 = cv583;
      v584 = cv584;
      v590 = cv590;
      
      continue;
      }
    else {
      const {data: [v634], secs: v636, time: v635, didSend: v219, from: v633 } = txn3;
      switch (v634[0]) {
        case 'Buyer_optIn0_59': {
          const v637 = v634[1];
          undefined /* setApiDetails */;
          ;
          await txn3.getOutput('Buyer_optIn', 'v558', ctc4, v558);
          const cv582 = v582;
          const cv583 = v635;
          const cv584 = v583;
          const cv590 = v590;
          
          v582 = cv582;
          v583 = cv583;
          v584 = cv584;
          v590 = cv590;
          
          continue;
          break;
          }
        case 'Buyer_submitBid0_59': {
          const v677 = v634[1];
          undefined /* setApiDetails */;
          const v683 = v677[stdlib.checkedBigNumberify('./index.rsh:70:12:spread', stdlib.UInt_max, '0')];
          const v684 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v633), null);
          const v685 = {
            None: 0,
            Some: 1
            }[v684[0]];
          const v686 = stdlib.eq(v685, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v687 = v686 ? false : true;
          stdlib.assert(v687, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
            msg: 'You already submitted your bid',
            who: 'Auctioneer'
            });
          const v690 = stdlib.add(v590, v683);
          ;
          const v706 = true;
          await txn3.getOutput('Buyer_submitBid', 'v706', ctc9, v706);
          await stdlib.mapSet(map0, v633, v683);
          await stdlib.mapSet(map1, v633, null);
          stdlib.protect(ctc0, await interact.seeBid(v633, v683), {
            at: './index.rsh:76:40:application',
            fs: ['at ./index.rsh:76:40:application call to [unknown function] (defined at: ./index.rsh:76:40:function exp)', 'at ./index.rsh:76:40:application call to "liftedInteract" (defined at: ./index.rsh:76:40:application)', 'at ./index.rsh:72:28:application call to [unknown function] (defined at: ./index.rsh:72:28:function exp)'],
            msg: 'seeBid',
            who: 'Auctioneer'
            });
          
          const v715 = stdlib.safeAdd(v582, stdlib.checkedBigNumberify('./index.rsh:77:32:decimal', stdlib.UInt_max, '1'));
          const cv582 = v715;
          const cv583 = v635;
          const cv584 = v583;
          const cv590 = v690;
          
          v582 = cv582;
          v583 = cv583;
          v584 = cv584;
          v590 = cv590;
          
          continue;
          break;
          }
        }}
    
    }
  stdlib.protect(ctc0, await interact.winnerReady(), {
    at: './index.rsh:87:38:application',
    fs: ['at ./index.rsh:87:38:application call to [unknown function] (defined at: ./index.rsh:87:38:function exp)', 'at ./index.rsh:87:38:application call to "liftedInteract" (defined at: ./index.rsh:87:38:application)'],
    msg: 'winnerReady',
    who: 'Auctioneer'
    });
  
  const v726 = stdlib.safeAdd(v584, v559);
  let v727 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
  let v728 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
  let v729 = v557;
  let v730 = v583;
  let v731 = v584;
  let v737 = v590;
  
  while (await (async () => {
    const v742 = stdlib.le(v731, v726);
    
    return v742;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc6],
      timeoutAt: ['time', v726],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v557, v558, v726, v727, v728, v729, v730, v737],
        evt_cnt: 0,
        funcNum: 6,
        lct: v730,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:116:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          stdlib.simMapDupe(sim_r, 1, map1);
          
          const {data: [], secs: v790, time: v789, didSend: v466, from: v788 } = txn4;
          
          ;
          
          const cv727 = v727;
          const cv728 = v728;
          const cv729 = v729;
          const cv730 = v789;
          const cv731 = v730;
          const cv737 = v737;
          
          await (async () => {
            const v727 = cv727;
            const v728 = cv728;
            const v729 = cv729;
            const v730 = cv730;
            const v731 = cv731;
            const v737 = cv737;
            
            if (await (async () => {
              const v742 = stdlib.le(v731, v726);
              
              return v742;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v729,
                tok: v558
                });
              sim_r.txns.push({
                kind: 'from',
                to: v557,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc10, ctc4, ctc1, ctc1, ctc1, ctc10, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v790, time: v789, didSend: v466, from: v788 } = txn4;
      ;
      const v791 = stdlib.addressEq(v557, v788);
      stdlib.assert(v791, {
        at: './index.rsh:116:17:dot',
        fs: ['at ./index.rsh:115:38:application call to [unknown function] (defined at: ./index.rsh:115:38:function exp)'],
        msg: 'sender correct',
        who: 'Auctioneer'
        });
      stdlib.protect(ctc0, await interact.claimTimeout(), {
        at: './index.rsh:117:42:application',
        fs: ['at ./index.rsh:117:42:application call to [unknown function] (defined at: ./index.rsh:117:42:function exp)', 'at ./index.rsh:117:42:application call to "liftedInteract" (defined at: ./index.rsh:117:42:application)', 'at ./index.rsh:115:38:application call to [unknown function] (defined at: ./index.rsh:115:38:function exp)'],
        msg: 'claimTimeout',
        who: 'Auctioneer'
        });
      
      const cv727 = v727;
      const cv728 = v728;
      const cv729 = v729;
      const cv730 = v789;
      const cv731 = v730;
      const cv737 = v737;
      
      v727 = cv727;
      v728 = cv728;
      v729 = cv729;
      v730 = cv730;
      v731 = cv731;
      v737 = cv737;
      
      continue;
      }
    else {
      const {data: [v761], secs: v763, time: v762, didSend: v413, from: v760 } = txn3;
      undefined /* setApiDetails */;
      const v765 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v760), null);
      const v766 = {
        None: 0,
        Some: 1
        }[v765[0]];
      const v767 = stdlib.eq(v766, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v767, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
        msg: 'You are not eligible to claim item',
        who: 'Auctioneer'
        });
      ;
      const v773 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v760), null);
      const v774 = stdlib.fromSome(v773, stdlib.checkedBigNumberify('./index.rsh:98:50:decimal', stdlib.UInt_max, '0'));
      const v775 = stdlib.gt(v774, v728);
      const v776 = v775 ? v760 : v557;
      const v778 = v775 ? v774 : v728;
      const v780 = v775;
      await txn3.getOutput('Buyer_claimItem', 'v780', ctc9, v780);
      const v786 = stdlib.safeAdd(v727, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
      const cv727 = v786;
      const cv728 = v778;
      const cv729 = v776;
      const cv730 = v762;
      const cv731 = v730;
      const cv737 = v737;
      
      v727 = cv727;
      v728 = cv728;
      v729 = cv729;
      v730 = cv730;
      v731 = cv731;
      v737 = cv737;
      
      continue;}
    
    }
  ;
  ;
  stdlib.protect(ctc0, await interact.seeWinner(v729, v728), {
    at: './index.rsh:124:37:application',
    fs: ['at ./index.rsh:124:37:application call to [unknown function] (defined at: ./index.rsh:124:37:function exp)', 'at ./index.rsh:124:37:application call to "liftedInteract" (defined at: ./index.rsh:124:37:application)'],
    msg: 'seeWinner',
    who: 'Auctioneer'
    });
  
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v814], secs: v816, time: v815, didSend: v494, from: v813 } = txn3;
  undefined /* setApiDetails */;
  ;
  const v817 = [v729, v728];
  await txn3.getOutput('Buyer_showHighestBidder', 'v817', ctc11, v817);
  return;
  
  
  
  
  
  
  };
export async function _Buyer_claimItem6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_claimItem6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_claimItem6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v557, v558, v726, v727, v728, v729, v730, v737] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc4, ctc5, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1]);
  const v747 = ctc.selfAddress();
  const v749 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
    msg: 'in',
    who: 'Buyer_claimItem'
    });
  const v750 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v747), null);
  const v751 = {
    None: 0,
    Some: 1
    }[v750[0]];
  const v752 = stdlib.eq(v751, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v752, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
    msg: 'You are not eligible to claim item',
    who: 'Buyer_claimItem'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v726, v727, v728, v729, v730, v737, v749],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:97:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v761], secs: v763, time: v762, didSend: v413, from: v760 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Buyer_claimItem"
        });
      stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v760), null);
      ;
      const v773 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v760), null);
      const v774 = stdlib.fromSome(v773, stdlib.checkedBigNumberify('./index.rsh:98:50:decimal', stdlib.UInt_max, '0'));
      const v775 = stdlib.gt(v774, v728);
      const v776 = v775 ? v760 : v557;
      const v778 = v775 ? v774 : v728;
      const v780 = v775;
      const v781 = await txn1.getOutput('Buyer_claimItem', 'v780', ctc7, v780);
      
      const v786 = stdlib.safeAdd(v727, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
      const v1199 = v786;
      const v1200 = v778;
      const v1201 = v776;
      const v1202 = v762;
      const v1204 = v737;
      const v1205 = stdlib.le(v730, v726);
      if (v1205) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v776,
          tok: v558
          });
        sim_r.txns.push({
          kind: 'from',
          to: v557,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc4, ctc1, ctc1, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v761], secs: v763, time: v762, didSend: v413, from: v760 } = txn1;
  undefined /* setApiDetails */;
  const v765 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v760), null);
  const v766 = {
    None: 0,
    Some: 1
    }[v765[0]];
  const v767 = stdlib.eq(v766, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v767, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)', 'at ./index.rsh:95:33:application call to [unknown function] (defined at: ./index.rsh:95:33:function exp)'],
    msg: 'You are not eligible to claim item',
    who: 'Buyer_claimItem'
    });
  ;
  const v773 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v760), null);
  const v774 = stdlib.fromSome(v773, stdlib.checkedBigNumberify('./index.rsh:98:50:decimal', stdlib.UInt_max, '0'));
  const v775 = stdlib.gt(v774, v728);
  const v776 = v775 ? v760 : v557;
  const v778 = v775 ? v774 : v728;
  const v780 = v775;
  const v781 = await txn1.getOutput('Buyer_claimItem', 'v780', ctc7, v780);
  if (v413) {
    stdlib.protect(ctc0, await interact.out(v761, v781), {
      at: './index.rsh:95:13:application',
      fs: ['at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:13:function exp)', 'at ./index.rsh:108:15:application call to "k" (defined at: ./index.rsh:97:26:function exp)', 'at ./index.rsh:97:26:application call to [unknown function] (defined at: ./index.rsh:97:26:function exp)'],
      msg: 'out',
      who: 'Buyer_claimItem'
      });
    }
  else {
    }
  
  const v786 = stdlib.safeAdd(v727, stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, '1'));
  const v1199 = v786;
  const v1200 = v778;
  const v1201 = v776;
  const v1202 = v762;
  const v1204 = v737;
  const v1205 = stdlib.le(v730, v726);
  if (v1205) {
    return;
    }
  else {
    ;
    ;
    return;
    }
  
  
  };
export async function _Buyer_optIn7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_optIn7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_optIn7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    Buyer_optIn0_59: ctc6,
    Buyer_submitBid0_59: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v557, v558, v559, v581, v582, v583, v590] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v602 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:63:29:application call to [unknown function] (defined at: ./index.rsh:63:29:function exp)', 'at ./index.rsh:60:17:application call to "runBuyer_optIn0_59" (defined at: ./index.rsh:63:12:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'in',
    who: 'Buyer_optIn'
    });
  const v606 = ['Buyer_optIn0_59', v602];
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v559, v581, v582, v583, v590, v606],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v634], secs: v636, time: v635, didSend: v219, from: v633 } = txn1;
      
      switch (v634[0]) {
        case 'Buyer_optIn0_59': {
          const v637 = v634[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Buyer_optIn"
            });
          ;
          const v652 = await txn1.getOutput('Buyer_optIn', 'v558', ctc5, v558);
          
          const v1213 = v582;
          const v1214 = v635;
          const v1216 = v590;
          const v1217 = stdlib.le(v583, v581);
          if (v1217) {
            sim_r.isHalt = false;
            }
          else {
            const v1218 = stdlib.safeAdd(v583, v559);
            const v1254 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
            const v1255 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
            const v1256 = v557;
            const v1257 = v635;
            const v1259 = v590;
            const v1260 = stdlib.le(v583, v1218);
            if (v1260) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v557,
                tok: v558
                });
              sim_r.txns.push({
                kind: 'from',
                to: v557,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Buyer_submitBid0_59': {
          const v677 = v634[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v634], secs: v636, time: v635, didSend: v219, from: v633 } = txn1;
  switch (v634[0]) {
    case 'Buyer_optIn0_59': {
      const v637 = v634[1];
      undefined /* setApiDetails */;
      ;
      const v652 = await txn1.getOutput('Buyer_optIn', 'v558', ctc5, v558);
      if (v219) {
        stdlib.protect(ctc0, await interact.out(v637, v652), {
          at: './index.rsh:63:13:application',
          fs: ['at ./index.rsh:63:13:application call to [unknown function] (defined at: ./index.rsh:63:13:function exp)', 'at ./index.rsh:65:12:application call to "k" (defined at: ./index.rsh:64:24:function exp)', 'at ./index.rsh:64:24:application call to [unknown function] (defined at: ./index.rsh:64:24:function exp)'],
          msg: 'out',
          who: 'Buyer_optIn'
          });
        }
      else {
        }
      
      const v1213 = v582;
      const v1214 = v635;
      const v1216 = v590;
      const v1217 = stdlib.le(v583, v581);
      if (v1217) {
        return;
        }
      else {
        const v1218 = stdlib.safeAdd(v583, v559);
        const v1254 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
        const v1255 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
        const v1256 = v557;
        const v1257 = v635;
        const v1259 = v590;
        const v1260 = stdlib.le(v583, v1218);
        if (v1260) {
          return;
          }
        else {
          ;
          ;
          return;
          }}
      break;
      }
    case 'Buyer_submitBid0_59': {
      const v677 = v634[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Buyer_showHighestBidder4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_showHighestBidder4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_showHighestBidder4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc4, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v557, v558, v728, v729] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc1, ctc4]);
  const v812 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:125:8:application',
    fs: ['at ./index.rsh:125:8:application call to [unknown function] (defined at: ./index.rsh:125:8:function exp)'],
    msg: 'in',
    who: 'Buyer_showHighestBidder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v728, v729, v812],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:125:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v814], secs: v816, time: v815, didSend: v494, from: v813 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Buyer_showHighestBidder"
        });
      ;
      const v817 = [v729, v728];
      const v818 = await txn1.getOutput('Buyer_showHighestBidder', 'v817', ctc7, v817);
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v558
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v814], secs: v816, time: v815, didSend: v494, from: v813 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v817 = [v729, v728];
  const v818 = await txn1.getOutput('Buyer_showHighestBidder', 'v817', ctc7, v817);
  stdlib.protect(ctc0, await interact.out(v814, v818), {
    at: './index.rsh:125:8:application',
    fs: ['at ./index.rsh:125:8:application call to [unknown function] (defined at: ./index.rsh:125:8:function exp)', 'at ./index.rsh:126:11:application call to "k" (defined at: ./index.rsh:125:8:function exp)'],
    msg: 'out',
    who: 'Buyer_showHighestBidder'
    });
  
  return;
  
  
  
  };
export async function _Buyer_submitBid7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_submitBid7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_submitBid7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Buyer_optIn0_59: ctc7,
    Buyer_submitBid0_59: ctc6
    });
  const ctc9 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v557, v558, v559, v581, v582, v583, v590] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v608 = ctc.selfAddress();
  const v610 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to "runBuyer_submitBid0_59" (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'in',
    who: 'Buyer_submitBid'
    });
  const v611 = v610[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v613 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v608), null);
  const v614 = {
    None: 0,
    Some: 1
    }[v613[0]];
  const v615 = stdlib.eq(v614, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v616 = v615 ? false : true;
  stdlib.assert(v616, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to "runBuyer_submitBid0_59" (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
    msg: 'You already submitted your bid',
    who: 'Buyer_submitBid'
    });
  const v623 = ['Buyer_submitBid0_59', v610];
  
  const txn1 = await (ctc.sendrecv({
    args: [v557, v558, v559, v581, v582, v583, v590, v623],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v611, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v634], secs: v636, time: v635, didSend: v219, from: v633 } = txn1;
      
      switch (v634[0]) {
        case 'Buyer_optIn0_59': {
          const v637 = v634[1];
          
          break;
          }
        case 'Buyer_submitBid0_59': {
          const v677 = v634[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Buyer_submitBid"
            });
          const v683 = v677[stdlib.checkedBigNumberify('./index.rsh:70:12:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v633), null);
          const v690 = stdlib.add(v590, v683);
          sim_r.txns.push({
            amt: v683,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v706 = true;
          const v707 = await txn1.getOutput('Buyer_submitBid', 'v706', ctc9, v706);
          
          await stdlib.simMapSet(sim_r, 0, v633, v683);
          await stdlib.simMapSet(sim_r, 1, v633, null);
          const v715 = stdlib.safeAdd(v582, stdlib.checkedBigNumberify('./index.rsh:77:32:decimal', stdlib.UInt_max, '1'));
          const v1378 = v715;
          const v1379 = v635;
          const v1381 = v690;
          const v1382 = stdlib.le(v583, v581);
          if (v1382) {
            sim_r.isHalt = false;
            }
          else {
            const v1383 = stdlib.safeAdd(v583, v559);
            const v1419 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
            const v1420 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
            const v1421 = v557;
            const v1422 = v635;
            const v1424 = v690;
            const v1425 = stdlib.le(v583, v1383);
            if (v1425) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v557,
                tok: v558
                });
              sim_r.txns.push({
                kind: 'from',
                to: v557,
                tok: undefined /* Nothing */
                });
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v634], secs: v636, time: v635, didSend: v219, from: v633 } = txn1;
  switch (v634[0]) {
    case 'Buyer_optIn0_59': {
      const v637 = v634[1];
      return;
      break;
      }
    case 'Buyer_submitBid0_59': {
      const v677 = v634[1];
      undefined /* setApiDetails */;
      const v683 = v677[stdlib.checkedBigNumberify('./index.rsh:70:12:spread', stdlib.UInt_max, '0')];
      const v684 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v633), null);
      const v685 = {
        None: 0,
        Some: 1
        }[v684[0]];
      const v686 = stdlib.eq(v685, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v687 = v686 ? false : true;
      stdlib.assert(v687, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:60:17:application call to [unknown function] (defined at: ./index.rsh:60:17:function exp)'],
        msg: 'You already submitted your bid',
        who: 'Buyer_submitBid'
        });
      const v690 = stdlib.add(v590, v683);
      ;
      const v706 = true;
      const v707 = await txn1.getOutput('Buyer_submitBid', 'v706', ctc9, v706);
      if (v219) {
        stdlib.protect(ctc0, await interact.out(v677, v707), {
          at: './index.rsh:70:13:application',
          fs: ['at ./index.rsh:70:13:application call to [unknown function] (defined at: ./index.rsh:70:13:function exp)', 'at ./index.rsh:73:15:application call to "k" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:72:28:application call to [unknown function] (defined at: ./index.rsh:72:28:function exp)'],
          msg: 'out',
          who: 'Buyer_submitBid'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v633, v683);
      await stdlib.mapSet(map1, v633, null);
      const v715 = stdlib.safeAdd(v582, stdlib.checkedBigNumberify('./index.rsh:77:32:decimal', stdlib.UInt_max, '1'));
      const v1378 = v715;
      const v1379 = v635;
      const v1381 = v690;
      const v1382 = stdlib.le(v583, v581);
      if (v1382) {
        return;
        }
      else {
        const v1383 = stdlib.safeAdd(v583, v559);
        const v1419 = stdlib.checkedBigNumberify('./index.rsh:90:35:decimal', stdlib.UInt_max, '0');
        const v1420 = stdlib.checkedBigNumberify('./index.rsh:90:22:decimal', stdlib.UInt_max, '0');
        const v1421 = v557;
        const v1422 = v635;
        const v1424 = v690;
        const v1425 = stdlib.le(v583, v1383);
        if (v1425) {
          return;
          }
        else {
          ;
          ;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Buyer_claimItem(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_claimItem expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_claimItem expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Buyer_claimItem6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Buyer_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Buyer_optIn7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Buyer_showHighestBidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_showHighestBidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_showHighestBidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Buyer_showHighestBidder4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Buyer_submitBid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_submitBid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_submitBid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Buyer_submitBid7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Buyer_claimItem()byte`, `Buyer_optIn()uint64`, `Buyer_showHighestBidder()(address,uint64)`, `Buyer_submitBid(uint64)byte`],
    pure: [`NFT_owner()address`],
    sigs: [`Buyer_claimItem()byte`, `Buyer_optIn()uint64`, `Buyer_showHighestBidder()(address,uint64)`, `Buyer_submitBid(uint64)byte`, `NFT_owner()address`]
    },
  appApproval: `BiAVAAEEByAIBjAoOAqMlbrOBoXjovcIiuO9jQ/MruTpBAVASGBooI0GJgMBAAABASI1ADEYQQWsKWRJIls1ASEFWzUCMRkjEkEACjEAKCEKr2ZCBXg2GgAXSUEAriI1BCM1BkkhCwxAAHVJIQwMQABmSSENDEAAVyENEkQ0AUkhBgxAACRJJQxAABAlEkQoZEk1A1cAIDUHQgVBSChkSTUDVwAgNQdCBTNJJAxAABAkEkQoZEk1A1cAIDUHQgUdIxJEKGRJNQNXACA1B0IFDSEMEkQpQgH8IQsSRClCAqxJIQ4MQAAQIQ4SRDYaATX/KjT/UEIAkIGJ8OBnEkQpNf8oNP9QIQWvUEIAezYaAhc1BDYaAzYaARdJIQ8MQAJfSSUMQAFKSSEFDEAAWSEFEkQlNAESRDQESSISTDQCEhFEKGRJNQNJVwAgNf8hB1s1/oAEF/zbLrAyBjT+D0Q0/zEAEkQ0/zQDIQRbNAMhCFs0/jQDIQlbMgY0AyEQWzQDIRFbQgMpSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/yEEWzX+IQhbNf0hB1s1/CEJWzX7IRBbNfohEVs1+Uk1BTX4gAR3Yn7vNPhQsDIGNPwMRDT4IlVAACeACAAAAAAAAAIuNP4WULA0/hY1BzT/NP40/TT8NPsyBjT6NPlCAqk0+FcBCDX3NPcXNfYxAIgD7FcJASJVIxNENPaIA+6ACQAAAAAAAALCAbAqNQcxACgxAIgDyCo09hZQNfVXCQE09UxQZjEAKDEAiAOxI4EJTFZmNP80/jT9NPw0+yMIMgY0+jT5NPYIQgI/SSEGDEAAXEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQhbNf6ABGG0rAywMgY0/g9ENP8xABJENP80AyEEWzT+NAMhB1s0AyEJWzQDV0AgMgY0AyESWzQDIRNbQgI2SCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQhbNf4hCVs1/Uk1BTX8gARokmRjNPxQsDIGNP4MRDEAiALuVwkBIlUjEkQiMQCIAuBXAAlJNfojWzT6IlVNSTX7NP0NNfqACAAAAAAAAAMMNPoWUQcIULA0+hZRBwg1BzT/NAMhBFs0/jQDIQdbIwg0/TT7NPpNNP8xADT6TTIGNAMhEls0AyETW0IBikkjDEAAwEkkDEAAZUgkNAESRDQESSISTDQCEhFEKGQ1A0k1BTX/gATU4BgtNP9QsIAIAAAAAAAAAzE0A1cwIDQDVygIUFCwNANXMCA0A1coCFA1B7EisgEishIkshAyCbIVMgqyFDQDIQRbshGzQgGlIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQhbNf0hB1s1/IAEmouRdLAjNP6IAf80/zEAEkQ0/zT+NP00/DT9CCIyBjT8IkIAakghFIgBxyI0ARJENARJIhJMNAISEURJNQVJIls1/yEFWzX+gASs0R/DNP8WUDT+FlCwIRSIAZaxIrIBIrISJLIQMgqyFDT/shGzMQA0/xZQNP4WUDIGFlAoSwFXADhnSCM1ATIGNQJCAQI1/zX+Nf01/DX7Nfo1+TX4NP40+w5BACw0+DT5FlA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAUGdIJTUBMgY1AkIAvjT4NPk0/jT6CCIiNPg0/TT+NP9CAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/jT5DkEAMDT3NPgWUDT5FlA0+hZQNPsWUDT8UDT9FlA0/xZQKEsBVwBwZ0ghBjUBMgY1AkIAXrEisgEjshIkshA0/LIUNPiyEbOxIrIBNP+yCCOyEDT3sgezNPc0+BZQNPsWUDT8UChLAVcAUGdIJDUBMgY1AkIAHDEZIQ8SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCMxNxJEIjUBIjUCQv+uSTEYYUAABUghCq+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v558",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v559",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v558",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v559",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v814",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v761",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer_optIn0_59",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Buyer_submitBid0_59",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v634",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v558",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v706",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v780",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v817",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Buyer_claimItem",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Buyer_optIn",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Buyer_showHighestBidder",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T17",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Buyer_submitBid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v814",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v761",
                "type": "bool"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T23",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer_optIn0_59",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Buyer_submitBid0_59",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T23",
                "name": "v634",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002a8938038062002a89833981016040819052620000269162000238565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b0316838501520151606082015290517fcf195cf82603ce4a4e34c55fad8b41a7c2cc7f7728b1ba77a8eec293c0fa52d59181900360800190a1620000943415600862000131565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b03908116875290518701518552438084526001988990559097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a0909101909352805191926200012892600292909101906200015b565b505050620002ed565b81620001575760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016990620002b0565b90600052602060002090601f0160209004810192826200018d5760008555620001d8565b82601f10620001a857805160ff1916838001178555620001d8565b82800160010185558215620001d8579182015b82811115620001d8578251825591602001919060010190620001bb565b50620001e6929150620001ea565b5090565b5b80821115620001e65760008155600101620001eb565b604080519081016001600160401b03811182821017156200023257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024c57600080fd5b6200025662000201565b835181526040601f19830112156200026d57600080fd5b6200027762000201565b60208501519092506001600160a01b03811681146200029557600080fd5b82526040939093015160208083019190915283015250919050565b600181811c90821680620002c557607f821691505b60208210811415620002e757634e487b7160e01b600052602260045260246000fd5b50919050565b61278c80620002fd6000396000f3fe6080604052600436106100eb5760003560e01c8063ab53f2c611610084578063cadc2e7a11610056578063cadc2e7a1461024d578063d9ab891f1461027a578063e4ae67d314610282578063e533a29d1461029557005b8063ab53f2c6146101e1578063ad9fa3d814610204578063c21b5ca814610217578063c79800371461023a57005b8063609e6cb5116100bd578063609e6cb5146101855780636a8cb8621461018d57806383230757146101b9578063a98bf223146101ce57005b80631e93b0f1146100f45780632c10a159146101185780633bc5b7bf1461012b5780635cf275dd1461015857005b366100f257005b005b34801561010057600080fd5b506003545b6040519081526020015b60405180910390f35b6100f261012636600461200a565b6102a8565b34801561013757600080fd5b5061014b61014636600461203b565b6102cc565b60405161010f919061208c565b34801561016457600080fd5b5061016d6102f8565b6040516001600160a01b03909116815260200161010f565b61016d61030a565b61019561033a565b6040805182516001600160a01b03168152602092830151928101929092520161010f565b3480156101c557600080fd5b50600154610105565b6100f26101dc36600461200a565b61037b565b3480156101ed57600080fd5b506101f661039b565b60405161010f9291906120e8565b6100f261021236600461200a565b610438565b61022a610225366004612122565b610458565b604051901515815260200161010f565b6100f261024836600461200a565b610493565b34801561025957600080fd5b5061026d61026836600461203b565b6104b3565b60405161010f919061213b565b61022a6104d9565b6100f261029036600461216d565b610505565b6100f26102a336600461200a565b610525565b6102b0611da7565b6102c86102c236849003840184612257565b82610545565b5050565b60408051606081018252600080825260208201819052918101919091526102f282610712565b92915050565b600080610304816107e5565b91505090565b6000610314611de5565b60208101515160009052610326611da7565b6103308282610aa7565b6020015192915050565b6040805180820190915260008082526020820152610356611e2f565b602081015160009052610367611da7565b6103718282610e44565b6040015192915050565b610383611da7565b6102c86103953684900384018461233e565b82610e44565b6000606060005460028080546103b09061235a565b80601f01602080910402602001604051908101604052809291908181526020018280546103dc9061235a565b80156104295780601f106103fe57610100808354040283529160200191610429565b820191906000526020600020905b81548152906001019060200180831161040c57829003601f168201915b50505050509050915091509091565b610440611da7565b6102c86104523684900384018461233e565b82610ff8565b6000610462611de5565b602081018051516001905251516040015183905261047e611da7565b6104888282610aa7565b606001519392505050565b61049b611da7565b6102c86104ad36849003840184612257565b826112a2565b60408051606081018252600080825260208201819052918101919091526102f28261146a565b60006104e3611e2f565b6020810151600090526104f4611da7565b6104fe8282610ff8565b5192915050565b61050d611da7565b6102c861051f3684900384018461238f565b82610aa7565b61052d611da7565b6102c861053f36849003840184612257565b82611533565b610555600160005414600c6116e9565b815161057090158061056957508251600154145b600d6116e9565b6000808055600280546105829061235a565b80601f01602080910402602001604051908101604052809291908181526020018280546105ae9061235a565b80156105fb5780601f106105d0576101008083540402835291602001916105fb565b820191906000526020600020905b8154815290600101906020018083116105de57829003601f168201915b50505050508060200190518101906106139190612442565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610646929190612499565b60405180910390a161065a341560096116e9565b61067461066d338360200151600161170f565b600a6116e9565b805161068c906001600160a01b03163314600b6116e9565b610694611e59565b815181516001600160a01b0391821690526020808401518351921691015260408083018051835190920191909152606083015190516106d39190611727565b81516060908101919091526020808301805160009081905281514393019290925284830151815160400152519091015261070c81611774565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561075e5761075e612058565b14156107d5576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561079f5761079f612058565b60018111156107b0576107b0612058565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b60006001600054141561089a576000600280546108019061235a565b80601f016020809104026020016040519081016040528092919081815260200182805461082d9061235a565b801561087a5780601f1061084f5761010080835404028352916020019161087a565b820191906000526020600020905b81548152906001019060200180831161085d57829003601f168201915b50505050508060200190518101906108929190612442565b519392505050565b60046000541415610945576000600280546108b49061235a565b80601f01602080910402602001604051908101604052809291908181526020018280546108e09061235a565b801561092d5780601f106109025761010080835404028352916020019161092d565b820191906000526020600020905b81548152906001019060200180831161091057829003601f168201915b505050505080602001905181019061089291906124c1565b600660005414156109f05760006002805461095f9061235a565b80601f016020809104026020016040519081016040528092919081815260200182805461098b9061235a565b80156109d85780601f106109ad576101008083540402835291602001916109d8565b820191906000526020600020905b8154815290600101906020018083116109bb57829003601f168201915b5050505050806020019051810190610892919061251f565b60076000541415610a9b57600060028054610a0a9061235a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a369061235a565b8015610a835780601f10610a5857610100808354040283529160200191610a83565b820191906000526020600020905b815481529060010190602001808311610a6657829003601f168201915b505050505080602001905181019061089291906125d7565b6107e0600060076116e9565b610ab7600760005414601e6116e9565b8151610ad2901580610acb57508251600154145b601f6116e9565b600080805560028054610ae49061235a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b109061235a565b8015610b5d5780601f10610b3257610100808354040283529160200191610b5d565b820191906000526020600020905b815481529060010190602001808311610b4057829003601f168201915b5050505050806020019051810190610b7591906125d7565b9050610b9260408051808201909152600060208201908152815290565b610ba38260600151431060206116e9565b7f98f8dcc61c54566331d2722cb852666b9c9e039346c295e2d67af064a12e505b3385604051610bd492919061267b565b60405180910390a16000602085015151516001811115610bf657610bf6612058565b1415610cd957610c083415601b6116e9565b6020808301516040516001600160a01b0390911681527f152da1dce3c5692178329638de69a8a4936276ee0a26dcb7a0a61ba1560f241e910160405180910390a16020808301516001600160a01b031690840152610c64611e59565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201526060808601518451820152608086015183850180519190915280514394019390935260a086015183519092019190915260c085015191510152610cd381611774565b5061070c565b6001602085015151516001811115610cf357610cf3612058565b141561070c57602084015151604001518152610d3b6001610d133361146a565b516001811115610d2557610d25612058565b14610d31576001610d34565b60005b601c6116e9565b805151610d4b903414601d6116e9565b604051600181527f13fb82c0facd8a60f0ab3edaf25a48da0f4a98fc6cd57fafb765ca424f5c033b9060200160405180910390a1600160608401819052336000908152600460209081526040808320805460ff1916851781558551519085015560059091529020805462ff00ff19169091179055610dc7611e59565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401518251909101526080830151610e0d906001611727565b602082810180519290925281514391015260a084015190516040015260c083015182515101602082015160600152610cd381611774565b610e54600460005414600f6116e9565b8151610e6f901580610e6857508251600154145b60106116e9565b600080805560028054610e819061235a565b80601f0160208091040260200160405190810160405280929190818152602001828054610ead9061235a565b8015610efa5780601f10610ecf57610100808354040283529160200191610efa565b820191906000526020600020905b815481529060010190602001808311610edd57829003601f168201915b5050505050806020019051810190610f1291906124c1565b9050610f34604080516060810182526000602082018181529282015290815290565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b943385604051610f659291906126cd565b60405180910390a1610f793415600e6116e9565b606082015181516001600160a01b03918216905260408084015183516020908101919091528351825181519094168452810151908301527f084d2396f1517aaaf22e680a89ebfa1a4a04da6062a730c3f7be53bdb0a8e346910160405180910390a1805160408401526000808055600181905561070c90600290611eb4565b61100860066000541460136116e9565b815161102390158061101c57508251600154145b60146116e9565b6000808055600280546110359061235a565b80601f01602080910402602001604051908101604052809291908181526020018280546110619061235a565b80156110ae5780601f10611083576101008083540402835291602001916110ae565b820191906000526020600020905b81548152906001019060200180831161109157829003601f168201915b50505050508060200190518101906110c6919061251f565b60408051808201909152600080825260208201529091506110ee8260400151431060156116e9565b7f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c21365338560405161111f9291906126cd565b60405180910390a161114f60016111353361146a565b51600181111561114757611147612058565b1460116116e9565b61115b341560126116e9565b600161116633610712565b51600181111561117857611178612058565b14611184576000611192565b61118d33610712565b604001515b80825260808301511060208083018290526040519182527f44573c6c4359ff877744cbc510040ca4bd9cd73735fc07865fda906cc43ed816910160405180910390a16020810151151583526111e5611eee565b825181516001600160a01b03918216905260208085015183519216910152604080840151825190910152606083015161121f906001611727565b6020808301519190915282015161123a57826080015161123d565b81515b602080830151810191909152820151611257578251611259565b335b6020820180516001600160a01b0390921660409092019190915280514360609091015260c084015181516080015260e0840151905160a0015261129b8161196e565b5050505050565b6112b260066000541460186116e9565b81516112cd9015806112c657508251600154145b60196116e9565b6000808055600280546112df9061235a565b80601f016020809104026020016040519081016040528092919081815260200182805461130b9061235a565b80156113585780601f1061132d57610100808354040283529160200191611358565b820191906000526020600020905b81548152906001019060200180831161133b57829003601f168201915b5050505050806020019051810190611370919061251f565b90506113848160400151431015601a6116e9565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33846040516113b5929190612499565b60405180910390a16113c9341560166116e9565b80516113e1906001600160a01b0316331460176116e9565b6113e9611eee565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015183860180519190915260808088015182519095019490945260a08088015182519616959093019490945283514391015260c085015183519092019190915260e08401519151015261070c8161196e565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156114b6576114b6612058565b14156107d5576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156114f7576114f7612058565b600181111561150857611508612058565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b61154360076000541460236116e9565b815161155e90158061155757508251600154145b60246116e9565b6000808055600280546115709061235a565b80601f016020809104026020016040519081016040528092919081815260200182805461159c9061235a565b80156115e95780601f106115be576101008083540402835291602001916115e9565b820191906000526020600020905b8154815290600101906020018083116115cc57829003601f168201915b505050505080602001905181019061160191906125d7565b9050611615816060015143101560256116e9565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763384604051611646929190612499565b60405180910390a161165a341560216116e9565b8051611672906001600160a01b0316331460226116e9565b61167a611e59565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015183518201526060808501518451820152608085015183850180519190915280514394019390935260a085015183519092019190915260c08401519151015261070c81611774565b816102c85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061171d83853085611bad565b90505b9392505050565b60008261173483826126f7565b91508110156102f25760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611706565b805160600151602082015160400151116118bf576117da6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151818501528285018051516080860152805184015160a086015251015160c0840152600760005543600155516118969183910181516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906118ba929190611f59565b505050565b6118c7611eee565b81515181516001600160a01b039182169052825160209081015183519216918101919091528201516040908101518351909101516119059190611727565b815160409081019190915260208083018051600090819052815183015284515181516001600160a01b03909116908401528482018051909201518151606090810191909152825190930151815160800152905190910151905160a001526102c88161196e565b50565b80516040015160208201516080015111611ac7576119e560405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518185015281850180515160608087019190915281518401516080870152815183015190941660a08087019190915281519094015160c0860152519092015160e084015260066000554360015590516118969183910160006101008201905060018060a01b038084511683528060208501511660208401526040840151604084015260608401516060840152608084015160808401528060a08501511660a08401525060c083015160c083015260e083015160e083015292915050565b611ae38160000151602001518260200151604001516001611c87565b805151602082015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611b25573d6000803e3d6000fd5b5060408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b870180518801518652518b01518216835260049097554360015589519586019690965292518516978401979097525195820195909552935116908301529060a001611896565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611c149161271d565b60006040518083038185875af1925050503d8060008114611c51576040519150601f19603f3d011682016040523d82523d6000602084013e611c56565b606091505b5091509150611c6782826001611c9b565b5080806020019051810190611c7c9190612739565b979650505050505050565b611c92838383611cd6565b6118ba57600080fd5b60608315611caa575081611720565b825115611cba5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611706565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611d359161271d565b60006040518083038185875af1925050503d8060008114611d72576040519150601f19603f3d011682016040523d82523d6000602084013e611d77565b606091505b5091509150611d8882826002611c9b565b5080806020019051810190611d9d9190612739565b9695505050505050565b6040805160808101825260008082526020820152908101611dd8604080518082019091526000808252602082015290565b8152600060209091015290565b604051806040016040528060008152602001611e2a60408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b604051806040016040528060008152602001611e2a60405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001611e2a6040518060800160405280600081526020016000815260200160008152602001600081525090565b508054611ec09061235a565b6000825580601f10611ed0575050565b601f01602090049060005260206000209081019061196b9190611fdd565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001611e2a6040518060c00160405280600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b828054611f659061235a565b90600052602060002090601f016020900481019282611f875760008555611fcd565b82601f10611fa057805160ff1916838001178555611fcd565b82800160010185558215611fcd579182015b82811115611fcd578251825591602001919060010190611fb2565b50611fd9929150611fdd565b5090565b5b80821115611fd95760008155600101611fde565b60006040828403121561200457600080fd5b50919050565b60006040828403121561201c57600080fd5b6117208383611ff2565b6001600160a01b038116811461196b57600080fd5b60006020828403121561204d57600080fd5b813561172081612026565b634e487b7160e01b600052602160045260246000fd5b6002811061196b57634e487b7160e01b600052602160045260246000fd5b8151606082019061209c8161206e565b808352506020830151151560208301526040830151604083015292915050565b60005b838110156120d75781810151838201526020016120bf565b8381111561070c5750506000910152565b828152604060208201526000825180604084015261210d8160608501602087016120bc565b601f01601f1916919091016060019392505050565b60006020828403121561213457600080fd5b5035919050565b8151606082019061214b8161206e565b8083525060208301511515602083015260408301511515604083015292915050565b60006080828403121561200457600080fd5b6040805190810167ffffffffffffffff811182821017156121b057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156121b057634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156121b057634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156121b057634e487b7160e01b600052604160045260246000fd5b801515811461196b57600080fd5b60006040828403121561226957600080fd5b6040516040810181811067ffffffffffffffff8211171561229a57634e487b7160e01b600052604160045260246000fd5b6040528235815260208301356122af81612249565b60208201529392505050565b600081830360408112156122ce57600080fd5b6122d661217f565b8335815291506020601f19820112156122ee57600080fd5b506040516020810181811067ffffffffffffffff8211171561232057634e487b7160e01b600052604160045260246000fd5b604052602083013561233181612249565b8152602082015292915050565b60006040828403121561235057600080fd5b61172083836122bb565b600181811c9082168061236e57607f821691505b6020821081141561200457634e487b7160e01b600052602260045260246000fd5b600081830360808112156123a257600080fd5b6123aa61217f565b833581526060601f19830112156123c057600080fd5b6123c86121b6565b6123d06121e7565b6020860135600281106123e257600080fd5b815260408601356123f281612249565b806020830152506020605f198501121561240b57600080fd5b6124136121b6565b60609690960135865260408101959095529384526020810193909352509092915050565b80516107e081612026565b60006080828403121561245457600080fd5b61245c612218565b825161246781612026565b8152602083015161247781612026565b6020820152604083810151908201526060928301519281019290925250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b6000608082840312156124d357600080fd5b6124db612218565b82516124e681612026565b815260208301516124f681612026565b602082015260408381015190820152606083015161251381612026565b60608201529392505050565b600061010080838503121561253357600080fd5b6040519081019067ffffffffffffffff8211818310171561256457634e487b7160e01b600052604160045260246000fd5b816040528351915061257582612026565b81815261258460208501612437565b60208201526040840151604082015260608401516060820152608084015160808201526125b360a08501612437565b60a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060e082840312156125e957600080fd5b60405160e0810181811067ffffffffffffffff8211171561261a57634e487b7160e01b600052604160045260246000fd5b604052825161262881612026565b8152602083015161263881612026565b8060208301525060408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a0830191906126a78161206e565b806040850152506020810151151560608401526040810151516080840152509392505050565b6001600160a01b038316815260608101611720602083018480518252602090810151511515910152565b6000821982111561271857634e487b7160e01b600052601160045260246000fd5b500190565b6000825161272f8184602087016120bc565b9190910192915050565b60006020828403121561274b57600080fd5b81516117208161224956fea26469706673582212209d571e384bb8059eca57f8676068749a2999b3bcbf048c6c179f64927091706964736f6c634300080c0033`,
  BytecodeLen: 10889,
  Which: `oD`,
  version: 8,
  views: {
    NFT: {
      owner: `NFT_owner`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:122:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:127:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:90:20:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:60:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctioneer": Auctioneer,
  "Buyer_claimItem": Buyer_claimItem,
  "Buyer_optIn": Buyer_optIn,
  "Buyer_showHighestBidder": Buyer_showHighestBidder,
  "Buyer_submitBid": Buyer_submitBid
  };
export const _APIs = {
  Buyer: {
    claimItem: Buyer_claimItem,
    optIn: Buyer_optIn,
    showHighestBidder: Buyer_showHighestBidder,
    submitBid: Buyer_submitBid
    }
  };
